---
title: '{{ .File.ContentBaseName }}'
news_date: {{ now.Format "2006-01-02" }}
date_precision: day   # day, or month (use the 1st) when only the month is known
text: ''              # one or two sentences in Markdown; link the related page, e.g. [Paper](/publications/slug/)
---
