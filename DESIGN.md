# Academic design maintenance

This site keeps HugoBlox as its content and publication system. Local layouts provide the navy, white, and Carolina blue presentation. No second application or hosting service is required.

## Updating content

- Profile, biography, education, social links: `data/authors/me.yaml`.
- Homepage labels, research summaries, and number of recent papers: `data/academic.yaml`. The homepage automatically displays the first five papers from the same date-sorted collection as the publication index.
- Research detail: the existing three page bundles in `content/projects/`, referenced by `data/academic.yaml`.
- Experience, teaching, presentations, contact: their existing Markdown files in `content/`. Keep `academic: true` to use the custom presentation.
- Publications: keep using the root `publications.bib` import workflow. Review and merge the generated publication PR. The native bundles and `cite.bib` files under `content/publications/` remain authoritative for rendering and citation downloads.
- CV: replace `static/uploads/resume.pdf` without changing its path.
- Navigation: `config/_default/menus.yaml`.

## Design boundaries

`assets/css/custom.css` supplies the responsive design. `assets/js/academic-navigation.js` only handles the mobile menu and skip-link target. Search, citation actions, DOI/PDF links, pagination, and GitHub Pages deployment use HugoBlox's existing implementation. Publication detail pages use `layouts/publications/single.html` for consistent typography, year-only display, and sourced abstracts or summaries.

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

The original SK monogram is `static/images/sk-logo.svg` for navigation. HugoBlox generates the favicon from `assets/media/icon.svg` and the Apple touch icon from `assets/media/icon.png`. Keep these assets consistent; do not add a second favicon through a head hook. A locally authored `site_footer.html` renders the profile and site copyright without the promotional footer. The pinned HugoBlox source is MIT-licensed; its copyright and permission notice are retained in `licenses/HugoBlox-MIT.md`. No license key or validation logic is modified.

The Contact layout includes a lazy-loaded Google Maps embed for Kenan Laboratories, 125 South Road, with a direct Maps link. Education appears first on the Experience page.
