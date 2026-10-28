# Visual fidelity

Overall match: **90/100** — fonts, type sizes, spacing and each section measured in a browser on both sites (75%), and how alike the pages look as pictures (25%). How it's scored: docs/qa/import-fidelity.md.

Auto-tuning raised it from 83/100:

- lead: 52px, 34px on phones
- nav: 12px, 11px on phones, tracking 0.24em, uppercase
- wordmark: 14px, 12px on phones, tracking 0.29em, uppercase
- /privacy: 1 section(s) at the narrow width, as on the original
- heading on dark sections #ede6d8, as on the original (7 of 9 sections)
- text on dark-accent sections #ede6d8, as on the original (6 of 6 sections)
- heading on dark-accent sections #ede6d8, as on the original (5 of 5 sections)
- text on light-accent sections #0f0e0c, as on the original (2 of 2 sections)
- text on brand sections #ede6d8, as on the original (3 of 3 sections)
- heading on brand sections #ede6d8, as on the original (3 of 3 sections)
- /: "PRESS AND PODCASTS" set at the eyebrow size, as on the original
- /: "Influence that keeps the relationship in" set at the lead size, as on the original
- /introduction: "Begin with the first pages." set at the lead size, as on the original
- /preorder: "GIVE THIS BOOK" set at the eyebrow size, as on the original
- /privacy: "Privacy policy" set at the h2 size, as on the original
- /: the image in section 1 narrower on phones, as on the original
- /preorder: the image in section 1 narrower on phones, as on the original
- /preorder: section 5 "When will my copy arrive?" recreated as a custom component
- section padding on phones 90px

Without custom components: 90/100; with the sections recreated as components: 90/100.

## / at 1440px — 95/100

Checks 98/100 · looks alike 85/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/  
Imported: / (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 96px | 96px | same |
| Heading 2 size | 60px | 60px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 21px | 21px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 12px | 12px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Navigation size | 12px | 12px | same |
| Navigation letter spacing and case | 0.24em, uppercase | 0.24em, uppercase | same |
| Site title size | 14px | 14px | same |
| Site title letter spacing and case | 0.32em, uppercase | 0.29em, uppercase | same |
| Content width | 1200px | 1200px | same |
| Section padding | 112px | 112px | same |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | Power With | 100 | — |
| 2 | The drive that builds companies can dismantle marriages. | 100 | — |
| 3 | A language for power. | 100 | — |
| 4 | Power and closeness, held together. | 100 | — |
| 5 | Ten capacities make power with possible. | 100 | — |
| 6 | Read the first pages tonight. | 100 | — |
| 7 | Success is measured in relationship. | 100 | — |
| 8 | The authority people follow by choice. | 100 | — |
| 9 | Sophia Life | 82 | Columns: 1 → 2 |
| 10 | Bring power with into how your team leads. | 100 | — |
| 11 | PRESS AND PODCASTS | 80 | Text color: #c2b8a6 → #f6f1ee; Height: 515px → 358px |
| 12 | Influence that keeps the relationship intact. | 100 | — |

What would close the gap:

- Fewer columns: merge them into one stack column.

## / at 390px — 92/100

Checks 96/100 · looks alike 83/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/  
Imported: / (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 58px | 55.9px | same |
| Heading 2 size | 40px | 40.6px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 19px | 19.1px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 11px | 11px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Site title size | 12px | 12.1px | same |
| Site title letter spacing and case | 0.26em, uppercase | 0.29em, uppercase | same |
| Section padding | 56px | 90.5px | **differs** |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | Power With | 100 | — |
| 2 | The drive that builds companies can dismantle marriages. | 100 | — |
| 3 | A language for power. | 100 | — |
| 4 | Power and closeness, held together. | 100 | — |
| 5 | Ten capacities make power with possible. | 73 | Columns: 2 → 1; Height: 1492px → 2197px |
| 6 | Read the first pages tonight. | 100 | — |
| 7 | Success is measured in relationship. | 100 | — |
| 8 | The authority people follow by choice. | 100 | — |
| 9 | Sophia Life | 91 | Height: 1563px → 982px |
| 10 | Bring power with into how your team leads. | 100 | — |
| 11 | PRESS AND PODCASTS | 80 | Text color: #c2b8a6 → #f6f1ee; Height: 730px → 407px |
| 12 | Influence that keeps the relationship intact. | 100 | — |

What would close the gap:

- choices.layout.sectionPaddingMobile = 56
- Lay the text out in columns (a stack layout with more columns, or the text block's Columns style).

## /introduction at 1440px — 91/100

Checks 93/100 · looks alike 84/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/introduction/  
Imported: /introduction (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 76px | 76px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 21px | 21px | same |
| Lead text size | 52px | 52px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 12px | 12px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Site title size | 14px | 14px | same |
| Site title letter spacing and case | 0.32em, uppercase | 0.29em, uppercase | same |
| Content width | 604px | 1200px | **differs** |
| Section padding | 148px | 112px | same |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | The strategies that kept you safe are still running. | 100 | — |
| 2 | (no heading) | 75 | Text: Cormorant Garamond 52px → Cormorant Garamond 34px |
| 3 | SOPHIA LIFE | 100 | — |
| 4 | Begin with the first pages. | 100 | — |

What would close the gap:

- choices.layout.contentWidth = 604

## /introduction at 390px — 90/100

Checks 93/100 · looks alike 80/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/introduction/  
Imported: /introduction (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 44px | 41.9px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 19px | 19.1px | same |
| Lead text size | 34px | 34.5px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 11px | 11px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Site title size | 12px | 12.1px | same |
| Site title letter spacing and case | 0.26em, uppercase | 0.29em, uppercase | same |
| Section padding | 56px | 90.5px | **differs** |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | The strategies that kept you safe are still running. | 100 | — |
| 2 | (no heading) | 75 | Text: Cormorant Garamond 34px → Cormorant Garamond 27.2px |
| 3 | SOPHIA LIFE | 88 | Height: 528px → 339px |
| 4 | Begin with the first pages. | 100 | — |

What would close the gap:

- choices.layout.sectionPaddingMobile = 56

## /preorder at 1440px — 89/100

Checks 90/100 · looks alike 85/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/preorder/  
Imported: /preorder (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 76px | 96px | **differs** |
| Heading 3 size | 30px | 30px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 21px | 21px | same |
| Lead text size | 30px | 30px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 12px | 12px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Site title size | 14px | 14px | same |
| Site title letter spacing and case | 0.32em, uppercase | 0.29em, uppercase | same |
| Content width | 1200px | 1200px | same |
| Section padding | 112px | 112px | same |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | Power and closeness, held together. | 77 | Heading: Cormorant Garamond 76px → Cormorant Garamond 96px; Image placement: left, 21% wide → right, 27% wide |
| 2 | Hear first when pre-orders open. | 100 | — |
| 3 | Pre-order and receive the Orientation. | 100 | — |
| 4 | GIVE THIS BOOK | 90 | Text color: #c2b8a6 → #f6f1ee |
| 5 | When will my copy arrive? | 82 | Text color: #c2b8a6 → #aaa39e; Eyebrow and rule: QUESTIONS + rule → QUESTIONS |

What would close the gap:

- choices.typography.scale.h1.size = 76
- Adjust the stack column spans (image column) or the image's side.
- Heading block variant "eyebrow-rule".

## /preorder at 390px — 89/100

Checks 90/100 · looks alike 86/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/preorder/  
Imported: /preorder (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 44px | 55.9px | **differs** |
| Heading 3 size | 23px | 23.2px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 19px | 19.1px | same |
| Lead text size | 23px | 24px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 11px | 11px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Site title size | 12px | 12.1px | same |
| Site title letter spacing and case | 0.26em, uppercase | 0.29em, uppercase | same |
| Section padding | 56px | 90.5px | **differs** |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | Power and closeness, held together. | 85 | Heading: Cormorant Garamond 44px → Cormorant Garamond 55.9px |
| 2 | Hear first when pre-orders open. | 100 | — |
| 3 | Pre-order and receive the Orientation. | 100 | — |
| 4 | GIVE THIS BOOK | 90 | Text color: #c2b8a6 → #f6f1ee |
| 5 | When will my copy arrive? | 82 | Text color: #c2b8a6 → #aaa39e; Eyebrow and rule: QUESTIONS + rule → QUESTIONS |

What would close the gap:

- choices.typography.scale.h1.sizeMobile = 44
- choices.layout.sectionPaddingMobile = 56
- Heading block variant "eyebrow-rule".

## /privacy at 1440px — 89/100

Checks 92/100 · looks alike 81/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/privacy/  
Imported: /privacy (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 60px | 60px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 21px | 21px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 12px | 12px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Buttons size | 12px | 12px | same |
| Buttons letter spacing and case | 0.22em, uppercase | 0.22em, uppercase | same |
| Navigation size | 12px | 12px | same |
| Navigation letter spacing and case | 0.24em, uppercase | 0.24em, uppercase | same |
| Site title size | 14px | 14px | same |
| Site title letter spacing and case | 0.32em, uppercase | 0.29em, uppercase | same |
| Content width | 1000px | 1000px | same |
| Section padding | 273px | 112px | **differs** |
| Button corners | 0px | 0px | same |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | Privacy policy | 82 | Background: #ede6d8 → #0f0e0c |

What would close the gap:

- choices.layout.sectionPadding = 273
- Give the section its own background color (style.background = { type: "color", color: "#ede6d8" }).

## /privacy at 390px — 90/100

Checks 90/100 · looks alike 90/100 (screenshots compared).

Original: https://life-culture.github.io/powerwith/privacy/  
Imported: /privacy (local preview)

| Check | Original | Imported | |
|---|---|---|---|
| Heading font | Cormorant Garamond | Cormorant Garamond | same |
| Heading 1 size | 40px | 40.6px | same |
| Body font | EB Garamond | EB Garamond | same |
| Body text size | 19px | 19.1px | same |
| Label font | Montserrat | Montserrat | same |
| Eyebrows size | 11px | 11px | same |
| Eyebrows letter spacing and case | 0.3em, uppercase | 0.3em, uppercase | same |
| Site title size | 12px | 12.1px | same |
| Site title letter spacing and case | 0.26em, uppercase | 0.29em, uppercase | same |
| Section padding | 217px | 91px | **differs** |

| # | Section | Match | Differences |
|---|---|---|---|
| 1 | Privacy policy | 82 | Background: #ede6d8 → #0f0e0c |

What would close the gap:

- choices.layout.sectionPaddingMobile = 217
- Give the section its own background color (style.background = { type: "color", color: "#ede6d8" }).

