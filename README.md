# WorkTime+ — PWA (GitHub Pages ready)

Deploy to GitHub Pages:
1. Create a public repository.
2. Upload these files to the repo root (commit to `main`).
3. Settings → Pages → Source: `main` branch, `/ (root)`.
4. Visit:https://<username>.github.io/<repo>

Use Bubblewrap:
bubblewrap init --manifest https://<username>.github.io/<repo>/manifest.json
bubblewrap build
