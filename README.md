# evo.fin – One‑Pager

Unternehmensberatung für praktische KI-Anwendungen (KMU). Next.js + Tailwind, statisch exportiert (GitHub Pages ready).

## Lokale Entwicklung
```bash
npm install
npm run dev
```

## Build & Export (statisch)
```bash
npm run build
npm run export
# Ergebnis liegt in ./out
```

## GitHub veröffentlichen
1. Neues Repo auf GitHub anlegen (z. B. `evofin-website`).
2. Initialen Push:
   ```bash
   git init
   git add -A
   git commit -m "Initial commit: evo.fin one-pager"
   git branch -M main
   git remote add origin https://github.com/<USER>/evofin-website.git
   git push -u origin main
   ```
3. **GitHub Pages** aktivieren:
   - Settings → Pages → Build and deployment → Source: **GitHub Actions**.
   - Workflow `.github/workflows/pages.yml` ist enthalten und deployed automatisch.

Die Seite erscheint unter: `https://<USER>.github.io/<REPO>/`

### Anpassungen
- Kontakt: `hello@evo.fin`, Telefonnummer, Kalender-Link in `src/app/page.tsx` → Komponente `Contact`.
- Impressum/Datenschutz verlinken in `Footer`.
- Farbschema via Tailwind-Klassen.
