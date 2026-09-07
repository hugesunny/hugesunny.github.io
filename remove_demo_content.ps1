# Run from the repository root AFTER backing up/committing your current state.
# Removes demo content that is not used by the academic site.

$paths = @(
  "content/blog",
  "content/courses",
  "content/events/example",
  "content/projects/pandas",
  "content/projects/pytorch",
  "content/projects/scikit",
  "content/publications/conference-paper",
  "content/publications/journal-article",
  "content/publications/preprint"
)

foreach ($path in $paths) {
  if (Test-Path $path) {
    Remove-Item -Recurse -Force $path
    Write-Host "Removed $path"
  }
}
