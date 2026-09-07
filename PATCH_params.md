# config/_default/params.yaml changes

Do NOT replace your entire `params.yaml` with this file.
Edit only the fields below in the existing file.

## identity

Replace the current `hugoblox.identity` values with:

```yaml
identity:
  name: "Seung Hyun Kim"
  organization: ""
  type: person
  tagline: "Organic Semiconductors · Conjugated Polymers · Organic Electronics"
  description: "Academic website of Seung Hyun Kim, a Postdoctoral Research Associate at UNC-Chapel Hill studying conjugated polymers, organic semiconductors, charge transport, and organic electronic devices."
  social:
    twitter: ""
```

## Recommended cleanup for a single-language academic site

Under `hugoblox.header`:

```yaml
search: true
theme_toggle: true
theme_picker: false
language_switcher: false
```

Under `hugoblox.footer`:

```yaml
style: minimal
language_switcher: false
text: ""
```

Under `hugoblox.copyright`:

```yaml
notice: "© {year} {name}."
license:
  type: custom
  allow_derivatives: false
  share_alike: false
  allow_commercial: false
```

The current HugoBlox template contains many additional settings. Keep them unchanged.
