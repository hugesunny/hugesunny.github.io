# Continuity for the next chat

Updated: 2026-10-03. Start with Git status and this file, then AGENTS.md and WEBSITE_PRINCIPLES.md.

## Project

- Repository: https://github.com/hugesunny/hugesunny.github.io
- Published URL: https://seunghyunkim.org/
- Branch: main. GitHub Pages uses Actions, not branch-root publishing.
- Current local checkout: `C:/Users/shkim/Documents/Codex/2026-10-02/https-seunghyunkim-org-https-seunghyunkim-org/work/site-audit`.
- Existing preview server: http://localhost:1314/ serving `public/`. Check that it is running; do not assume it persists across chats.

## Accepted design and content

The owner approved the Brandon Stewart-inspired redesign and requested commit/deployment on 2026-10-03. Homepage: left circular portrait and right intro on desktop, photo above centered text on mobile; selected ACS Nano 2024 study; research accordions; three recent papers. Homepage introduction is now third person. Warm light background and serif name/headings are intentional. The new prompt replaced the previous dark-mode presentation; do not restore it accidentally.

The photo is a crop of the owner's approved campus image, with no new face generation. `assets/media/profile-old-well.png` is the approved full original-face composite, `profile-cropped.jpg` is the derived portrait. Keep both. Preserve the research figure's native ratio.

Bio and People were removed at the owner’s request on 2026-10-03. Their old URLs redirect to Experience and Publications. The owner approved committing and publishing this removal on 2026-10-03. The previous redesign was deployed successfully as 4a2b005. There are 21 publications and 21 BibTeX records. All are server-rendered in Publications with search/year/area filtering, sorting, hash state and BibTeX export. Native Cite and DOI remain.

## File map

- Homepage: `layouts/academic-home/list.html`, `data/academic.yaml`.
- Profile and retained biography source: `data/authors/me.yaml`. No standalone Bio page.
- Styles: `assets/css/custom.css`.
- Research: `content/projects/`, `data/research_areas.json`, research accordion partial.
- Publications: existing `content/publications/` bundles and `publications.bib`; supplemental summaries/dates in `data/publication_details.json`; shared sorted-publications partial.
- Filters: `layouts/_partials/academic/publication-index.html`, `assets/js/publication-index.js`.
- Related work: build-time `layouts/_partials/related_finder.html`.
- Verified co-author links used in bibliographies: `data/coauthors.json`. No People page. Legacy redirects: `static/bio/index.html` and `static/authors/index.html`.
- Native search override: `layouts/_partials/components/search-modal.html`, with lazy Pagefind loading and failure fallback.
- Credit/discovery: `config/_default/params.yaml`, footer and mysite-metadata hook. Footer credit disabled; discovery enabled; no information sharing or directory registration authorized.
- HTTPS canonical baseURL: `config/_default/hugo.yaml`. Build workflow must not override it with a CI-derived HTTP URL.
- Vendored pinned modules: `_vendor/`. Existing schema/config uses modern HugoBlox kit, not the older blox-tailwind example.

## Build and validation

Hugo extended 0.162.1, pnpm 10.14.0. Run `hugo --gc --minify`, then `pnpm run pagefind`, and `git diff --check`. Existing Windows Hugo binary is at `C:/Users/shkim/Documents/Codex/2026-09-07/sites-plugin-sites-openai-bundled-build/work/tools/hugo/hugo.exe`; Go is under the sibling `go/bin`. Module cache: `C:/Users/shkim/Documents/Codex/work/academic-cache`. These paths are local conveniences, not CI requirements.

Prior preview checks passed: 10 pages at 1440px and 390px without horizontal overflow; menu, research accordion/anchor, Pagefind/Ctrl+K/Escape, filters, sort/back restoration, visible 3px skip-link focus, Cite copying, locally fetched CV PDF, internal targets, HTTPS sitemap and publication metadata. Publication and CV data were unchanged. Pagefind indexed 33 pages.

Remaining limits: bulk BibTeX browser download did not yield a captured saved file; fallback was not fault-injection tested; most co-author identities remain unresolved; not all DOI destinations were reopened. The prompt's future book/response recognition and empty software/dataset examples were not implemented. See WEBSITE_PRINCIPLES.md for deliberate prompt adaptations. Do not represent these as fully verified.

## Publishing

Commit current authorized changes, push main, then verify the workflow for that exact commit has completed successfully. Check live third-person intro and crawler endpoints. Never store credentials in this file. If CDN cache shows old content, use a commit-version query parameter for verification. Do not submit any mysite forms.

For new edits, the previous deployment approval is historical, not blanket authorization to publish future changes. Update this handoff when the owner asks for continuity documentation.

## Latest owner changes

Teaching and mentoring are integrated into Experience at `/experience/#teaching`; `/teaching/` redirects there. Teaching is removed from navigation. Footer credit is disabled and the copyright is centered. Text links and actions share a 4px underline offset and 1px thickness.
