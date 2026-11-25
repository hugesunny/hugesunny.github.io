---
title: News
outputs: [html]
# One folder per item (see UPDATING.md). Items are shown on /news/ and the latest ones on the homepage;
# they have no pages of their own.
cascade:
  - target:
      kind: page
    build:
      render: never
      list: always
---
