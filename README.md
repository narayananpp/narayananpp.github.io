# narayananpp.github.io

Personal website of Narayanan Palghat Parameswaran — https://narayananpp.github.io

A hand-built static site (no build step):

- `index.html` — all page content (news, publications, experience, projects)
- `assets/site/css/style.css` — design system (dark/light themes via CSS variables)
- `assets/site/js/main.js` — theme toggle, hero reel, lazy video autoplay, filters, BibTeX copy
- `assets/site/media/` — compressed videos (H.264 MP4) and posters
- `publications/`, `projects/`, `news/`, `cv/` — redirects from the old al-folio URLs

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Adding a news item

Add an `<li>` at the top of `#news-list` in `index.html`:

```html
<li><time>Oct 2026</time><span class="tag paper">Paper</span><p>…</p></li>
```

Tag classes: `paper`, `career`, `award` (or none).

## Converting a GIF to a web video

```sh
ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p \
  -vf "scale='min(720,iw)':-2,pad=ceil(iw/2)*2:ceil(ih/2)*2,fps=24" -c:v libx264 -crf 28 -an out.mp4
ffmpeg -ss 0.5 -i out.mp4 -frames:v 1 -q:v 4 out.jpg
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which copies the static files to the `gh-pages` branch.
