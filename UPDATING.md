# Updating Seung Hyun Kim’s website

Edit content on GitHub or locally. Keep published page folders and URLs unchanged.

- **New paper:** update `publications.bib` and use the existing import workflow. Review the generated publication changes. Each paper keeps its `index.md`, `cite.bib`, and existing `toc.*` image.
- **Abstracts and dates:** sourced summaries and verified ordering dates live in `data/publication_details.json`, outside the importer. Do not invent missing dates or PDF links.
- **Homepage:** edit `home_intro`, `featured_publication`, and `featured_overview` in `data/academic.yaml`. Titles and venues are read from publication bundles. The short introduction is third person. There is no standalone Bio page.
- **Profile:** `data/authors/me.yaml` remains the source for name, role, education, social links and retained biography text.
- **Research:** edit the three bundles in `content/projects/`. `data/research_areas.json` lists the publication slugs explicitly associated with each area. A new paper appears in Publications automatically; add it to a research area only after checking the relationship.
- **Co-author links:** review the two external bibliography links in `data/coauthors.json`. Do not guess identities or expand initials. The owner removed the People page.
- **Experience and teaching:** edit `content/experience.md`; teaching and mentoring entries are in `teaching_groups`. Talks remain in `content/presentations.md`.
- **CV:** replace `static/uploads/resume.pdf` at the same path.
- **Credit and marker:** `config/_default/params.yaml`, `mysite.credit` is false and `mysite.discovery` is true by the owner’s choice. There is no telemetry or automatic information submission.

Build with Hugo extended 0.162.1: `hugo --gc --minify`, followed by `pnpm run pagefind`. Serve `public/` over HTTP. Check the homepage, Publications filters, citations, search, mobile menu, and CV before publishing. A push to main publishes through the existing GitHub Actions workflow. The owner approved committing and publishing this redesign on 2026-10-03; future changes require their own publication authorization. Read `AGENTS.md` and `HANDOFF.md` at the start of a new chat.
