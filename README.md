# JPGee Music – Portfolio / Services Site

Static one-page site for JPGee as a bassist, guitarist, and producer.

## Local preview

From the `site/` directory:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deploying with GitHub Pages

1. Initialize a git repo in `site/`:

   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial site"
   ```

2. Create a GitHub repo (replace `jpgeemusic-site` with the name you prefer):

   ```bash
   gh repo create jpgeemusic-site --public --source=. --remote=origin --push
   ```

3. Enable GitHub Pages for the repo (Pages from the `main` branch, `/root`):

   ```bash
   gh api repos/:owner/:repo/pages --method POST \
     -F source[branch]=main \
     -F source[path]='/'
   ```

   Or configure Pages from the GitHub web UI: Settings → Pages.

4. Your site will be available at:

   ```
   https://jpgeemusic.github.io/jpgeemusic-site/
   ```

You can later attach a custom domain if you want.
