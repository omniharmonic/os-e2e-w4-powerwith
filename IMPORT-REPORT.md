# Import report: Power With

Imported from https://life-culture.github.io (GitHub Pages, structured content) on 2026-10-28 with `openspace import github`.
Sources: 6 content file(s) with 24 section type(s) in life-culture/powerwith, design tokens (docs/handoff/design-tokens.json), the published pages (comparison). 15 requests.

## Summary

- **5** pages, **0** collection items in 0 collection(s)
- **15** media files (0.2 MB) downloaded into `media/`
- **0** redirects so old addresses keep working
- **10** item(s) need your attention (below)

## Pages

| Old address | OpenSpace | Title | Sections | Blocks |
| --- | --- | --- | ---: | ---: |
| `/` | `/` | Home | 12 | 42 |
| `/introduction` | `/introduction` | Introduction | 4 | 11 |
| `/preorder` | `/preorder` | Preorder | 5 | 16 |
| `/privacy` | `/privacy` | Privacy | 1 | 2 |
| `/thank-you` | `/thank-you` | Thank you | 3 | 6 |

## Design

The look was recreated with OpenSpace's own design system (Site Styles tokens, section color themes, layouts and section presets), not by copying GitHub Pages's CSS or code.

- Brand color #8E4A30 (the site's accent color).
- Fonts on GitHub Pages: Cormorant Garamond / EB Garamond → pairing "Cormorant Garamond & Jost" (Cormorant Garamond / Jost), same family for Cormorant Garamond. Licensed fonts can be uploaded in Site Styles → Fonts.
- Type scale on GitHub Pages: Heading 1 is 3.6× body text. Density "comfortable" from the section heights.
- Fonts on GitHub Pages kept as they are (Cormorant Garamond, EB Garamond, Montserrat): free on Google Fonts, self-hosted with the site.
- Type scale on GitHub Pages (the design tokens (docs/handoff/design-tokens.json) and the live site, measured in a browser) kept: display 96px/58px, heading 1 76px/44px, heading 2 60px/40px, body 21px/19px, eyebrows 12px/11px caps.
- Page rhythm on GitHub Pages (the design tokens (docs/handoff/design-tokens.json) and the live site, measured in a browser): content 1200px wide, sections padded 112px (56px on phones) — kept in Site Styles.
- Page background #0F0E0C on GitHub Pages → #fdf9f7 (text contrast 15.6:1).

Design check: 0 error(s), 14 warning(s).

- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- warning (/): An image in this columns block has no alt text, so people using screen readers won't know what it shows.
- … and 2 more: run Design check in Studio or `design_check` with Claude.

## Needs attention

### Forms and newsletter

- Sign-up forms sent their emails to https://powerwith.vercel.app/api/subscribe, which doesn't run on the new hosting. They now use OpenSpace's own sign-up and form handling — connect your email list in "Finish setting up". _(site)_
- Newsletter signup recreated. Subscribers are not moved: export your list from GitHub Pages (or your email service) and import it in the Hub. _(/, /introduction, /preorder)_
- Form "preorder-claim" recreated with 4 field(s). Submissions now arrive in the OpenSpace inbox; GitHub Pages form integrations (Google Drive, Mailchimp, Zapier…) need setting up again. _(/preorder)_

### Links

- 7 link(s) were still placeholders ([media kit file], [Substack URL], [Amazon paperback URL], [Barnes & Noble URL]…); their buttons were left out until you add the real addresses. _(site)_

### Design

- Layout: "Power With": the image takes 3/12 of the width, as on the original. _(/)_
- Layout: "Ten capacities make power with possible.": 5 cards per row, as on the original. _(/)_

### Other

- The site had its own content editor (Decap/Sveltia CMS at /admin). OpenSpace Studio replaces it: edit every page visually there. _(site)_

## Not moved by the importer

- Scripts and anything built by JavaScript in the browser.
- Form submissions, newsletter subscribers, member accounts and comments.
- Analytics and SEO history (search engines follow the redirects).

## Next steps

1. `npm install`, then `npx openspace check` (it should report no errors) and `npx openspace dev` to look around.
2. Bring it to visual parity with Claude: in this folder run `claude`, then `/openspace:migrate https://life-culture.github.io` (or ask Claude to compare each page with the original). It screenshots both sites at desktop and mobile and adjusts presets, Site Styles and sections — never raw HTML.
3. Fix the items under **Needs attention**, then publish (push to GitHub, or `publish` with Claude).
4. Move the domain only after the new site is live and checked:
   - add the custom domain in OpenSpace (`deploy.customDomain` in `openspace.json`, or the Hub);
   - at your DNS provider (GitHub Pages Domains, your registrar or elsewhere), point the records at the new host as the domain guide says (GitHub Pages: `A`/`CNAME` records; Cloudflare: the Pages project's records);
   - keep the GitHub Pages plan until the new site serves your domain over HTTPS and the redirects work; then cancel it (and transfer the domain if you like).

