# Academic design maintenance

This site keeps HugoBlox as its content and publication system. Local layouts provide the navy, white, and Carolina blue presentation. No second application or hosting service is required.

## Updating content

- Profile, biography, education, social links: `data/authors/me.yaml`.
- Homepage introduction, featured paper, research summaries, and number of recent papers: `data/academic.yaml`. The homepage displays one selected paper followed by the first three papers from the same date-sorted collection as the publication index.
- Research detail: the existing three page bundles in `content/projects/`, referenced by `data/academic.yaml`.
- Experience, teaching, presentations, contact: their existing Markdown files in `content/`. Keep `academic: true` to use the custom presentation.
- Publications: keep using the root `publications.bib` import workflow. Review and merge the generated publication PR. The native bundles and `cite.bib` files under `content/publications/` remain authoritative for rendering and citation downloads.
- CV: replace `static/uploads/resume.pdf` without changing its path.
- Navigation: `config/_default/menus.yaml`.

## Design boundaries

`assets/css/custom.css` supplies the responsive design, including the mobile profile layout, publication thumbnails, action-link metrics, and light/dark colors. These rules are consolidated here rather than repeated in head hooks. The theme initialization and controller scripts remain in the existing head hooks. `assets/js/academic-navigation.js` only handles the mobile menu and skip-link target. Search, citation actions, DOI/PDF links, pagination, and GitHub Pages deployment use HugoBlox's existing implementation. Publication detail pages use `layouts/publications/single.html` for consistent typography, year-only display, and sourced abstracts or summaries.

The homepage is ordered as profile, Selected Research, and Recent Publications. `home_intro` is a short presentation version of the author biography; keep it consistent with `data/authors/me.yaml`. `featured_publication` points to a native publication bundle. Its title, journal, year, and ToC image are read from that bundle; its two-sentence overview is taken from the sourced supplemental summary. Research themes can specify a `publication` link when supported by their existing content. The three Research sections retain their original `theme-1` to `theme-3` anchors.

The supported custom header lives in `layouts/_partials/components/headers/academic.html`. The `academic-home`, `research`, and publication list layouts render content from the sources above. `layouts/landing/single.html` uses the custom rendering only for pages marked `academic: true`; other landing pages retain native rendering.

Two theme partial overrides need attention when upgrading HugoBlox:

- `layouts/_partials/views/citation.html`: bibliography appearance, while retaining native publication resolution and attachment actions.
- `layouts/_partials/page_metadata_authors.html`: bold only the full, exact profile name and avoid empty author links. Ambiguous initials are intentionally not treated as an identity match. This override is based on the module revision pinned in `go.mod`.

The author data stays separate from presentation labels. If the institutional affiliation changes, also review the location in `data/academic.yaml`.

## Build and verify

Use Hugo extended 0.162.1, Go, and pnpm 10.14.0, matching the repository configuration:

```sh
pnpm install --frozen-lockfile
hugo --minify
pnpm run pagefind
```

Serve `public/` over HTTP to test the generated search index. After theme upgrades, check desktop and mobile navigation, publication pagination and detail pages, Cite, DOI/PDF links, search, and the CV. The existing publication import currently emits legacy publication/DOI field deprecation warnings; these also occurred before the design change. A future schema migration should update the importer and generated bundles together.

GitHub builds pull requests for validation. Merging into `main` triggers the existing GitHub Pages deployment workflow.

## Publication details and ordering

Supplemental content lives in `data/publication_details.json`, keyed by publication bundle directory. This keeps it safe from BibTeX re-imports. Six abstracts are reproduced under their recorded Creative Commons licenses; fifteen entries contain original short summaries based on publisher abstracts or the authors' institutional record. Each entry records its source and verification date. Exact abstracts and summaries have different headings on the site. A future native `abstract` field takes precedence over the supplement.

Sorting uses the recorded journal issue date when available, otherwise online publication date. Date sources and basis are stored alongside each sort key. Partial dates retain their actual precision: a month-only record sorts before records with a specified day in that same month, rather than inventing a publication day. Papers with no supplemental date fall back to their native Hugo date, so newly imported papers are included automatically. For precise ordering within a year, include month/day in new bibliographic records or add a verified `sort_date`. The display stays year-only and does not replace the bibliographic year or citation files.

TOC images have not been copied from subscription publisher pages. The detail layout accepts an optional `image` object with URL, alt text, caption, source URL, and license fields when a suitable authorized asset is available.

## Branding, footer, and map

The original SK monogram is `static/images/sk-logo.svg` for navigation. HugoBlox generates the favicon from `assets/media/icon.svg` and the Apple touch icon from `assets/media/icon.png`. `static/media/icon.png` serves the same existing PNG at the unprocessed `/media/icon.png` path used by native content views. Keep these assets consistent; do not add a second favicon through a head hook. A locally authored `site_footer.html` renders the profile and site copyright without the promotional footer. The pinned HugoBlox source is MIT-licensed; its copyright and permission notice are retained in `licenses/HugoBlox-MIT.md`. No license key or validation logic is modified.

The Contact layout includes a lazy-loaded Google Maps embed for Kenan Laboratories, 125 South Road, with a direct Maps link. Education appears first on the Experience page.

## Profile placement update

The homepage groups a 150px portrait on the left with name, role, and affiliation on the right. The introduction and profile links follow underneath. On mobile, the portrait is 86px and the name is 28px. Use proportional Resize rather than Fill for the original portrait; CSS height stays auto. No generated banner is used.

The profile band uses #f3f5f7 in light mode and #192632 in dark mode. The portrait alone has a white mount (7px desktop, 5px mobile) and a 1px neutral border; scientific graphics remain unframed.
