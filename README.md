# Seung Hyun Kim — Academic Website

Source repository for the academic website of Seung Hyun Kim.

## Content maintenance

- Profile and biography: `data/authors/me.yaml`
- Homepage research labels and summaries: `data/academic.yaml`
- Research pages: `content/projects/`
- Experience: `content/experience.md`
- Teaching: `content/teaching.md`
- Presentations: `content/presentations.md`
- Contact: `content/contact.md`
- Publications: `publications.bib`
- CV: `static/uploads/resume.pdf`

Updating `publications.bib` on `main` runs the publication import workflow and creates a pull request with the generated publication pages.

The site is deployed to GitHub Pages through the workflows in `.github/workflows/`.

For design-specific maintenance notes, see `DESIGN.md`.
