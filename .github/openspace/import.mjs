// .github/openspace/import.mjs — the OpenSpace import's steps (see ../workflows/openspace-import.yml).
import { spawnSync } from "node:child_process";
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEMP = process.env.RUNNER_TEMP || "/tmp";
const STATE = join(TEMP, "openspace-import.json");
const SUMMARY = join(TEMP, "openspace-import-summary.json");
const SOURCE = join(TEMP, "openspace-source");
const REQUEST = ".github/openspace/import.json";

const sh = (cmd, args, opts = {}) => {
  const r = spawnSync(cmd, args, { stdio: "inherit", ...opts });
  if (r.status !== 0) process.exit(r.status || 1);
  return r;
};
const out = (cmd, args) => spawnSync(cmd, args, { encoding: "utf8" }).stdout.trim();
const output = (k, v) => process.env.GITHUB_OUTPUT && appendFileSync(process.env.GITHUB_OUTPUT, k + "=" + v + "\n");
const state = () => JSON.parse(readFileSync(STATE, "utf8"));

/** Tell the Hub how far the import is (best effort: never fails the run). */
async function progress(phase, extra = {}) {
  try {
    const req = state();
    const tokenUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
    if (!req.hub || !req.siteId || !tokenUrl) return;
    const t = await fetch(tokenUrl + "&audience=" + encodeURIComponent(req.hub), {
      headers: { authorization: "bearer " + process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN },
    }).then((r) => r.json());
    await fetch(req.hub + "/ci/sites/" + req.siteId + "/import", {
      method: "POST",
      headers: { authorization: "Bearer " + t.value, "content-type": "application/json" },
      body: JSON.stringify({ id: req.id, phase, ...extra }),
    });
  } catch (e) {
    console.log("(progress report skipped: " + e.message + ")");
  }
}

const step = process.argv[2];

if (step === "start") {
  let req = existsSync(REQUEST) ? JSON.parse(readFileSync(REQUEST, "utf8")) : {};
  const cfg = existsSync("openspace.json") ? JSON.parse(readFileSync("openspace.json", "utf8")) : {};
  if (process.env.IN_URL) {
    const opts = (process.env.IN_OPTIONS || "").toLowerCase();
    req = {
      ...req,
      mode: req.mode || "url",
      source: process.env.IN_URL.trim(),
      platform: process.env.IN_PLATFORM || "auto",
      owner: /owner/.test(opts),
      render: /render/.test(opts),
    };
  }
  req.siteId = req.siteId || cfg.siteId;
  req.hub = (req.hub || cfg.hub || "").replace(/\/+$/, "");
  if (!req.source) {
    console.log("Nothing to import: no address in " + REQUEST + " or the run's inputs.");
    process.exit(1);
  }
  writeFileSync(STATE, JSON.stringify(req));
  output("mode", req.mode === "convert" ? "convert" : "url");
  output("render", req.render ? "true" : "false");
  if (req.mode === "convert") {
    // The old site's files, as they were before the conversion branch, for the importer to read.
    mkdirSync(SOURCE, { recursive: true });
    const base = req.base || "HEAD~1";
    const tar = spawnSync("git", ["archive", base], { maxBuffer: 1 << 30 });
    if (tar.status !== 0) process.exit(1);
    sh("tar", ["-x", "-C", SOURCE], { input: tar.stdout, stdio: ["pipe", "inherit", "inherit"] });
    // The old site leaves the branch (its history stays): only the OpenSpace site and the
    // repository's own files remain.
    const keep = new Set(req.keep || []);
    const keepRe = /^(?:\.github\/|docs\/|CNAME$|README|LICEN[CS]E|\.gitignore$|\.gitattributes$)/i;
    const files = out("git", ["ls-files", "-z"]).split("\0").filter(Boolean);
    const gone = files.filter((f) => !keep.has(f) && !keepRe.test(f));
    for (let i = 0; i < gone.length; i += 200) sh("git", ["rm", "-q", "--", ...gone.slice(i, i + 200)]);
  }
  await progress("reading");
}

if (step === "run") {
  const req = state();
  await progress("importing");
  const cli = process.env.OPENSPACE_CLI;
  // The browser always comes along: it measures the live site's fonts and layout, and compares
  // and tunes the result (exactly like an import on a computer).
  const pkgs = ["-p", cli, "-p", process.env.OPENSPACE_SHARP, "-p", process.env.OPENSPACE_PLAYWRIGHT];
  const common = [
    ".",
    "--into-existing",
    "--summary",
    SUMMARY,
    "--tune",
    "3",
    "--compare-thumbs",
    "--compare-out",
    ".openspace/fidelity",
  ];
  const args =
    req.mode === "convert"
      ? ["import", "github", req.source, ...common, "--source-dir", SOURCE]
      : req.platform === "github"
        ? ["import", "github", req.source, ...common]
        : ["import", req.source, ...common, ...(req.platform && req.platform !== "auto" ? ["--platform", req.platform] : [])];
  // --owner (Squarespace's ?format=json) and --render (a browser) only mean something for a
  // website address; a GitHub repository is read from its source.
  const fromGitHub = req.mode === "convert" || req.platform === "github";
  if (req.owner && !fromGitHub) args.push("--owner");
  if (req.render && !fromGitHub) args.push("--render");
  const r = spawnSync("npx", ["-y", ...pkgs, "openspace", ...args], { stdio: "inherit" });
  const summary = existsSync(SUMMARY) ? JSON.parse(readFileSync(SUMMARY, "utf8")) : undefined;
  await progress("imported", summary ? { counts: summary } : {});
  if (r.status !== 0) process.exit(r.status || 1);
}

if (step === "check") {
  await progress("checking");
  sh("npx", ["-y", "-p", process.env.OPENSPACE_CLI, "openspace", "check"]);
}

if (step === "save") {
  const req = state();
  await progress("saving");
  if (existsSync(REQUEST)) sh("git", ["rm", "-q", "--", REQUEST]);
  sh("git", ["config", "user.name", "OpenSpace"]);
  sh("git", ["config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"]);
  sh("git", ["add", "-A"]);
  const label = req.mode === "convert" ? "Make this site editable in OpenSpace" : "Move " + req.source + " into OpenSpace";
  sh("git", ["commit", "-q", "-m", label]);
  sh("git", ["push", "-q", "origin", "HEAD"]);
  await progress("saved", { sha: out("git", ["rev-parse", "HEAD"]) });
}

if (step === "publish") {
  sh("gh", ["workflow", "run", "publish.yml", "--ref", "main"]);
  await progress("publishing");
}

if (step === "failed") await progress("failed");
