# HugoBlox Academic Website Update Bundle

Target repository:

`hugesunny/hugesunny.github.io`

This bundle is designed for the HugoBlox Academic CV template currently deployed
in that repository.

## Files that can be copied directly into the repository

- `data/authors/me.yaml`
- `content/_index.md`
- `content/experience.md`
- `content/teaching.md`
- `content/presentations.md`
- `content/contact.md`
- `content/projects/_index.md`
- `content/projects/*/index.md`
- `config/_default/menus.yaml`
- `config/_default/hugo.yaml`
- `static/uploads/resume.pdf`
- `publications.bib`

## Important: profile photo

Replace the existing file:

`assets/media/authors/me.png`

with your own profile photo, keeping the filename `me.png`.

The bundle intentionally does not overwrite the photo automatically.

## Important: params.yaml

Read `PATCH_params.md`.

The existing `config/_default/params.yaml` contains many HugoBlox settings, so this
bundle does NOT replace the full file. Only change the identity and a few interface
fields described in `PATCH_params.md`.

## Remove demo content

After committing/backing up the current repository, run in PowerShell from the
repository root:

```powershell
./remove_demo_content.ps1
```

Or delete the listed demo folders manually.

## Publications

The repository already contains `.github/workflows/import-publications.yml`.

It is configured to run when the root-level `publications.bib` changes.

Recommended flow:

1. Copy `publications.bib` to the repository root.
2. Commit and push to `main`.
3. Open GitHub Actions and confirm `Import Publications From Bibtex` succeeds.
4. The workflow should create a pull request containing generated publication pages.
5. Review the generated publication metadata.
6. Merge the pull request.
7. Confirm the normal Pages deployment succeeds.

### Publication metadata check

The 21 entries were transcribed from the CV dated September 7, 2026.

One entry requires manual author-name verification:

- `Hydroxyl-Rich Siloxane Hybrid Dielectric...` contains two authors abbreviated
  as `Kim, S. H.` in the CV. The earlier website source also contained similar
  Kim-name variants. Verify the full author names before treating either entry as
  your own name on the public website.

## Recommended first commit sequence

```bash
git checkout -b academic-content
# copy the bundle files into the repo
git add .
git commit -m "Replace HugoBlox demo content with academic profile"
git push -u origin academic-content
```

Preview the branch or create a pull request, then merge into `main`.

For a personal site, you can also commit directly to `main` after checking locally,
but a branch is safer for this first large replacement.
