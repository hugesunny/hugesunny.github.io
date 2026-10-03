# Website principles

Reference: https://brandonstewart.org/ and the instructions at https://gking.harvard.edu/mysite/files/ACADEMIC_SITE_PROMPT.md, fetched 2026-10-02.

## Architecture and deliberate adaptations

Retain the pinned modern HugoBlox kit module and its existing configuration directory instead of downgrading to the obsolete blox-tailwind example in the prompt. Modules are vendored in `_vendor/`. Keep the existing publication importer, native actions and search, permanent `/publications/` URLs, CV path, and GitHub Pages custom domain. The current Actions workflow remains; its build now uses the configured https baseURL rather than a CI-derived URL.

The reference site's layout and visual treatment take precedence over the prompt's default palette/font: a left circular portrait, serif name and research title, quiet warm background, slate links, dense server-rendered bibliography, and charcoal footer. The supplied approved campus photo is cropped locally; its face is not regenerated. The homepage introduction uses third person by the owner's request; the full biography is separate. Light mode follows the new prompt, replacing the prior dark toggle.

## Maintenance

All project CSS is consolidated in `assets/css/custom.css`, including the previously inline record-page styles. Native HugoBlox owns Pagefind, Cite, DOI links and page shell. Filter enhancements use vanilla JS over server-rendered publication rows. Hash states restore on back/forward. BibTeX export uses the original citation files, without rewriting entries.

Research area assignments are curated by publication title evidence and stored outside importer output. The areas contain no speculative publication relationships. See Also is computed at build time using explicit overrides, shared research area, title tokens, authors and tags. It does not imply a scientific dependency between papers.

## Scope and prompt limits

Do not create empty Software, Dataset or Lab sections, fabricated book/publication categories, guessed co-author identities, unavailable PDFs, or new publisher-cover downloads. Existing ToC graphics remain locally hosted. The People page has 72 bibliography names, with two safely resolved institutional/group links; the remainder need owner review. A 25-paper viewport target would be unreadable for this site's long titles and author lists, so density is improved without forcing that count.

The prompt's sample config and later SEO instructions contradict each other on CI-derived baseURL; the explicit https custom domain wins. Its anonymous form ping contradicts the owner's instruction to send nothing, so no submission is made. No software is published and no external details are sent during the preview task.

Future book-edition/response-paper recognition and software/dataset-specific layout examples are not introduced without such content. Existing standalone presentations remain at their current route. No bibliography author/title/year/DOI/BibTeX changes are made.
