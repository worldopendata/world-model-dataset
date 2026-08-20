# WorldModel Data Atlas

A task-first, evidence-aware catalog of open datasets for world-model research.

## Preview

This repository is ready for GitHub Pages. It is a dependency-free static site.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. The site will be available at:

```text
https://worldopendata.github.io/world-model-dataset/
```

The catalog data is maintained in `datasets.json`; edits pushed to `main` are published automatically.

## Local preview

Serve this directory with any static file server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Data maintenance

Dataset records live in `datasets.json`; the interface is generated in the browser. Keep one primary task per dataset and use tags for secondary tasks, domains, and modalities.

## Deployment

The site has no runtime dependencies. Copy the directory to a web root and serve it as static files. `deploy.sh` starts a private Python static server and records its PID; it does not install packages or alter system environments.

```bash
./deploy.sh 18080
```
1
