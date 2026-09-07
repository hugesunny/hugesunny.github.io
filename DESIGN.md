# Academic design maintenance

This site keeps HugoBlox as its content and publication system. Local layouts provide the navy, white, and Carolina blue presentation. No second application or hosting service is required.

## Updating content

- Profile, biography, education, social links: `data/authors/me.yaml`.
- Homepage labels, research summaries, and number of recent papers: `data/academic.yaml`. The homepage currently displays the five newest publication dates; selection is automatic.
- Research detail: the existing three page bundles in `content/projects/`, referenced by `data/academic.yaml`.
- Experience, teaching, presentations, contact: their existing Markdown files in `content/`. Keep `academic: true` to use the custom presentation.
- Publications: keep using the root `publications.bib` import workflow. Review and merge the generated publication PR. The native bundles and `cite.bib` files under `content/publications/` remain authoritative for rendering and citation downloads.
- CV: replace `static/uploads/resume.pdf` without changing its path.
- Navigation: `config/_default/menus.yaml`.

## Design boundaries

`assets/css/custom.css` supplies the responsive design. `assets/js/academic-navigation.js` only handles the mobile menu and skip-link target. Search, citation actions, DOI/PDF links, publication detail pages, pagination, and GitHub Pages deployment use HugoBlox's existing implementation.

The supported custom header lives in `layouts/_partials/components/headers/academic.html`. The `academic-home`, `research`, and publication list layouts render content from the sources above. `layouts/landing/single.html` uses the custom rendering only for pages marked `academic: true`; other landing pages retain native rendering.

Two theme partial overrides need attention when upgrading HugoBlox:

- `layouts/_partials/views/citation.html`: bibliography appearance, while retaining native publication resolution and attachment actions.
- `layouts/_partials/page_metadata_authors.html`: bold only the full, exact profile name and avoid empty author links. Ambiguous initials are intentionally not treated as an identity match. This override is based on the module revision pinned in `go.mod`.

The author data stays separate from presentation labels. If the institutional affiliation changes, also review the portrait caption and location in `data/academic.yaml` and the homepage layout.

## Build and verify

Use Hugo extended 0.162.1, Go, and pnpm 10.14.0, matching the repository configuration:

```sh
pnpm install --frozen-lockfile
hugo --minify
pnpm run pagefind
```

Serve `public/` over HTTP to test the generated search index. After theme upgrades, check desktop and mobile navigation, publication pagination and detail pages, Cite, DOI/PDF links, search, and the CV. The existing publication import currently emits legacy publication/DOI field deprecation warnings; these also occurred before the design change. A future schema migration should update the importer and generated bundles together.

GitHub builds pull requests for validation. Merging into `main` triggers the existing GitHub Pages deployment workflow.
