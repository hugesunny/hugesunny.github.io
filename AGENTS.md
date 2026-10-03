# Website collaboration instructions

Read `HANDOFF.md`, `WEBSITE_PRINCIPLES.md`, and `UPDATING.md` before editing. Check Git status and preserve unrelated changes. Verify current files and deployment state instead of trusting historical notes.

- Maintain the existing HugoBlox kit, Pagefind, BibTeX importer, and permanent published URLs. Do not introduce another framework or downgrade the theme to a prompt's example version.
- Use a restrained academic design: warm off-white, slate links, serif principal headings, readable sans-serif body, circular owned portrait, dense bibliography. No ornamental banners, gradients, decorative numbers, repeated labels, or invented research claims.
- Homepage introduction is third person, two sentences. Preserve its scientific meaning. Full Bio is distinct. Research/project descriptions may retain their existing first-person voice unless asked otherwise.
- Keep all project presentation rules in `assets/css/custom.css`; do not append competing head-hook CSS overrides.
- Preserve publication title, author, journal, year, DOI, BibTeX and CV data. Supplemental sourced summaries and verified ordering dates stay in `data/publication_details.json`, outside importer output.
- Resolve co-author identities using paper/field/institution context. Leave uncertain initials unlinked; never guess identity from a name alone.
- Keep `params.mysite.credit: true` and `params.mysite.discovery: true` unless the owner changes that preference. The owner declined information sharing and directory registration. Send no details or anonymous form ping to the mysite team.
- Build with the pinned Hugo extended version and run Pagefind after Hugo. Check desktop 1440px and mobile 390px, navigation, search, filters, Cite, CV, figures, focus and overflow for changes affecting them.
- Keep new work local and show a preview before publication. Commit/push/deploy only when explicitly requested. A push to `main` triggers GitHub Pages, so never use it merely to save a draft.
- Communicate concisely in Korean. Distinguish verified results, assumptions and limitations. Do not claim a deployment or download succeeded without evidence. Do not use em dashes.
