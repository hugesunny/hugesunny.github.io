# Updating Seung Hyun Kim’s website

Edit content on GitHub or locally. Keep published page folders and URLs unchanged.

- **New paper:** update `publications.bib` and use the existing import workflow. Review the generated publication changes. Each paper keeps its `index.md`, `cite.bib`, and existing `toc.*` image.
- **Abstracts and dates:** sourced summaries and verified ordering dates live in `data/publication_details.json`, outside the importer. Do not invent missing dates or PDF links.
- **Homepage:** edit `home_intro`, `featured_publication`, and `featured_overview` in `data/academic.yaml`. Titles and venues are read from publication bundles. The short introduction is third person. There is no standalone Bio page.
- **Profile:** `data/authors/me.yaml` remains the source for name, role, education, social links and retained biography text.
- **Research:** edit the three bundles in `content/projects/`. `data/research_areas.json` lists the publication slugs explicitly associated with each area. Publication tags are maintained separately in `data/publication_tags.json`: five owner-approved tags, one or two per paper. Assign every new paper a sourced relevant tag without changing the Research page categories. A new paper appears in Publications automatically; add it to a research area only after checking the relationship.
- **Co-author links:** review the two external bibliography links in `data/coauthors.json`. Do not guess identities or expand initials. The owner removed the People page.
- **Experience and teaching:** edit `content/experience.md`; teaching and mentoring entries are in `teaching_groups`. Talks remain in `content/presentations.md`.
- **CV:** replace `static/uploads/resume.pdf` at the same path.
- **Credit and marker:** `config/_default/params.yaml`, `mysite.credit` is false and `mysite.discovery` is true by the owner’s choice. There is no telemetry or automatic information submission.

Build with Hugo extended 0.162.1: `hugo --gc --minify`, followed by `pnpm run pagefind`. Serve `public/` over HTTP. Check the homepage, Publications filters, citations, search, mobile menu, and CV before publishing. A push to main publishes through the existing GitHub Actions workflow. The owner approved committing and publishing this redesign on 2026-10-03; future changes require their own publication authorization. Read `AGENTS.md` and `HANDOFF.md` at the start of a new chat.

Publication lists display title, authors, and journal reference on separate lines. The journal reference reads year, volume, issue (`number`), pages or article number directly from `cite.bib`; missing fields are omitted. Full journal names are retained for readability, so this is an ACS-inspired display rather than strict ACS citation formatting.

Authorship symbols are sourced from the owner’s September 29, 2026 CV (pages 2–3) in `data/publication_authorship.json`. They describe Seung Hyun Kim only: † equal contribution/co-first author, * corresponding author. Do not infer other authors’ roles or a co-first role from author order. The shared author partial displays them across lists and paper pages without altering BibTeX.
