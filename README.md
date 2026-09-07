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

### Publication ToC images

To show a table-of-contents graphic beside a paper on the Publications page, place the image inside that paper's page-bundle folder and name it `toc.webp` (recommended), `toc.png`, `toc.jpg`, or `toc.jpeg`.

Example:

```text
content/publications/kim-2024-multiscale/
├── index.md
├── cite.bib
└── toc.webp
```

The Publications page detects `toc.*` automatically and displays the image on the right. Papers without a ToC image remain text-only. Homepage Recent Publications stay text-only.

The site is deployed to GitHub Pages through the workflows in `.github/workflows/`.

For design-specific maintenance notes, see `DESIGN.md`.
