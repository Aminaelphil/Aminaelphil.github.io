# 🎯 Portfolio Amina Elphil - Guide de Déploiement

## 📋 Contenu du Package

- `portfolio.jsx` - Composant React principal (responsive & moderne)
- `vite.config.js` - Configuration Vite
- `package.json` - Dépendances et scripts
- `.github/workflows/deploy.yml` - Déploiement automatique sur GitHub Pages

---

## 🚀 Installation Rapide

### Option 1: Cloner et Deployer (Recommandé)

```bash
# 1. Créer un nouveau repo GitHub nommé: Aminaelphil.github.io

# 2. Cloner ce repo
git clone https://github.com/Aminaelphil/Aminaelphil.github.io.git
cd Aminaelphil.github.io

# 3. Installer les dépendances
npm install

# 4. Développement local
npm run dev

# 5. Builder
npm run build

# 6. Pusher vers GitHub
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Option 2: Intégrer dans un repo existant

```bash
# Créer un dossier portfolio
mkdir portfolio
cd portfolio

# Copier les fichiers
# - portfolio.jsx → src/App.jsx
# - package.json
# - vite.config.js
# - .github/workflows/deploy.yml

npm install
npm run dev
```

---

## 📁 Structure pour GitHub Pages

```
Aminaelphil.github.io/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── App.jsx (→ contenu de portfolio.jsx)
│   └── main.jsx
├── public/
├── dist/ (généré par build)
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 🛠️ Configuration Fichiers Nécessaires

### `package.json`
```json
{
  "name": "amina-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0"
  }
}
```

### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

### `index.html`
```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio Amina Elphil - Ingénieure Informatique | Data Science & IA" />
    <title>Amina Elphil - Data Science & AI Engineer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 🔄 Déploiement Automatique avec GitHub Actions

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## ✨ Caractéristiques du Portfolio

✅ **Design moderne** - Dark theme avec dégradés cyan/blue  
✅ **Entièrement responsive** - Mobile, tablet, desktop  
✅ **Animations fluides** - Scroll progress, hover effects  
✅ **Performance optimisée** - React + Vite  
✅ **SEO friendly** - Meta tags, structure sémantique  
✅ **Gratuit** - Hebergé sur GitHub Pages  
✅ **100% Personnalisable** - Code React modifiable  

---

## 🎨 Personnalisations Possibles

### Changer les couleurs
```javascript
// Modifiez les classes Tailwind dans le JSX
// cyan-400, blue-500 → vos couleurs préférées
```

### Ajouter des sections
```javascript
// Ajoutez simplement des <section> id="..." et mettez à jour la nav
```

### Modifier le contenu
- Experiences
- Skills
- Languages
- Contact info
- Textes

---

## 📱 URL Final

Après le déploiement, votre portfolio sera accessible à:
```
https://Aminaelphil.github.io
```

**Important:** Le repo doit s'appeler exactement `Aminaelphil.github.io`

---

## 🐛 Troubleshooting

### Le site ne s'affiche pas
- Vérifie que le repo est public
- Attends 2-3 min après le push
- Rafraîchis le navigateur (Ctrl+Shift+R)

### CSS/Styles ne s'appliquent pas
- Vérifier que Tailwind CSS est chargé
- Vérifier les imports lucide-react

### Build fail
```bash
npm install
npm run build  # Vérifier les erreurs
```

---

## 💡 Tips

1. **Ajouter un favicon**
   - Placer une image 32x32px dans `public/favicon.ico`

2. **Améliorer le SEO**
   - Ajouter des meta tags dans `index.html`
   - Créer un `robots.txt` dans `public/`

3. **Custom domain** (optionnel)
   - Acheter un domaine
   - Configurer dans GitHub Pages settings

4. **Analytics** (optionnel)
   - Ajouter Google Analytics ID

---

## 📞 Support

Pour des modifications:
1. Edit le fichier `.jsx`
2. Test localement: `npm run dev`
3. Push vers GitHub
4. Déploiement automatique via Actions

Bon courage avec ton portfolio! 🚀
