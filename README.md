# Ahmadou Moustapha Tounkara — Portfolio · LARTISKA

Portfolio personnel de **Ahmadou Moustapha Tounkara**, artiste peintre sénégalais et fondateur de **LARTISKA** — entreprise spécialisée dans la peinture décorative, les décorations murales artistiques, le carrelage design et le plafonnage moderne.

🌍 Basé à Dakar, Sénégal
📞 +221 78 544 63 63
📧 contact@lartiska.com
📱 Instagram · Facebook · TikTok : **LARTISKA**

## Stack technique

- React + TypeScript
- Vite
- Tailwind CSS + Framer Motion
- React Router

## Développement

```bash
npm install
npm run dev          # serveur de dev → http://localhost:8080
npm run build        # build production → dist/
npm run preview      # prévisualiser le build
```

## Structure

- `src/pages/Index.tsx` — page d'accueil (hero, à propos, compétences, projets, CV, contact)
- `src/pages/CV.tsx` — CV imprimable / téléchargeable en PDF
- `src/pages/ProjectDetail.tsx` — page détail d'une réalisation avec galerie + lightbox
- `src/data/projects.ts` — liste des réalisations LARTISKA
- `public/villes/` — photos des réalisations (organisées par ville)
- `public/LARTISKA.mp4` — vidéo de fond du hero

## Déploiement sur Render

Le projet est configuré comme **Static Site** :

- Build command : `npm install && npm run build`
- Publish directory : `dist`
- SPA routing géré par [`public/_redirects`](public/_redirects)
