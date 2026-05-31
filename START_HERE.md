# 📋 START HERE - Fichier de Démarrage

Bienvenue! Ce fichier explique comment utiliser ton portfolio en 5 minutes.

## 📦 Ce qui a été créé pour toi

Un **portfolio professionnel complet** basé sur ton CV:

```
portfolio/
├── 📁 src/                    # Code React
│   ├── App.jsx               # Composant principal (ta page)
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles
├── 📁 .github/
│   └── workflows/
│       └── deploy.yml        # Déploiement automatique (GitHub Actions)
├── 📁 public/                # Images & ressources
├── 📄 index.html             # Page HTML
├── 📄 package.json           # Dépendances
├── 📄 vite.config.js         # Configuration build
├── 📄 README.md              # Documentation complète
├── 📄 GUIDE_DEBUTANT.md      # Tuto step-by-step
├── 📄 GUIDE_DEPLOIEMENT.md   # Déploiement avancé
└── 📄 .gitignore             # Fichiers à ignorer

TOTAL: 13 fichiers prêts à l'emploi!
```

## ⚡ Setup en 3 Commandes

### 1️⃣ Installer les dépendances
```bash
npm install
```
⏳ Prend 2-5 minutes (une fois seulement)

### 2️⃣ Lancer localement
```bash
npm run dev
```
Le navigateur ouvre automatiquement `http://localhost:3000`

### 3️⃣ Build pour la production
```bash
npm run build
```

## 🌐 Déployer sur GitHub Pages (GRATUIT)

### Étape 1: Créer le repo

Sur GitHub.com:
1. Nouveau repo
2. Nom: **`Aminaelphil.github.io`** (exact!)
3. Public
4. Ne pas initialiser avec README

### Étape 2: Uploader

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/TON_USERNAME/Aminaelphil.github.io.git
git branch -M main
git push -u origin main
```

⚠️ Remplace `TON_USERNAME` par ton nom d'utilisateur GitHub!

### Étape 3: Attendre

- GitHub Actions va build automatiquement (~2-3 min)
- Ton portfolio sera sur: **https://Aminaelphil.github.io**

## 🎨 Personnaliser

Tous les contenus se modifient dans `src/App.jsx`:

```javascript
// Changer tes expériences
const experiences = [
  {
    title: 'Ton titre',
    company: 'Ton entreprise',
    period: 'Dates',
    details: ['Point 1', 'Point 2']
  }
];

// Changer tes compétences
const skills = {
  'Backend': ['PHP', 'Symfony'],
  'Frontend': ['React', 'HTML5']
};
```

## 📚 Documentation

| Fichier | Pour |
|---------|------|
| **README.md** | Vue générale & structure |
| **GUIDE_DEBUTANT.md** | Si tu débutes avec git/npm |
| **GUIDE_DEPLOIEMENT.md** | Configuration avancée |

## ✨ Contenu Automatiquement Intégré

Le portfolio inclut déjà (d'après ton CV):

✅ Tes infos personnelles  
✅ Tes 6 compétences principales  
✅ Tes 4 expériences professionnelles  
✅ Tes leadership & projets  
✅ Tes 3 langues  
✅ Liens de contact  

## 🚀 Après le Setup

1. **Tester** sur mobile (appareils réels)
2. **Partager** avec tes amis
3. **Ajouter** à ton LinkedIn
4. **Mettre à jour** régulièrement

## 💡 Tips

- Ajoute des **images** de tes projets (plus attractif)
- Améliore les **descriptions** (plus de détails = meilleur SEO)
- Partage sur **LinkedIn, GitHub, Twitter**
- Mets un **lien vers ton PDF CV**

## ❓ Problèmes?

### npm install échoue
```bash
npm cache clean --force
npm install
```

### npm run dev ne marche pas
```bash
node --version  # Doit être ≥ 16
npm --version   # Doit être ≥ 8
```

### Le site ne s'affiche pas après git push
- Vérifier que GitHub Actions réussit (Actions tab)
- Attendre 5 minutes
- Rafraîchir le navigateur (Ctrl+Shift+R)

## 📞 Ressources Utiles

- [Node.js](https://nodejs.org) - Pour npm
- [Git](https://git-scm.com) - Pour versionner
- [Tailwind CSS](https://tailwindcss.com) - Design
- [Lucide Icons](https://lucide.dev) - Icônes SVG
- [Vite](https://vitejs.dev) - Build tool

## 🎯 Roadmap

### Phase 1: Setup ✅ (Toi maintenant)
- [ ] npm install
- [ ] npm run dev
- [ ] Créer repo GitHub

### Phase 2: Déploiement (5 min)
- [ ] Uploader sur GitHub
- [ ] Attendre Actions
- [ ] Partager le lien

### Phase 3: Amélioration (après)
- [ ] Ajouter des images
- [ ] Intégrer Google Analytics
- [ ] Ajouter un formulaire contact
- [ ] Créer un blog
- [ ] Acheter un domaine custom

## 🎉 Félicitations!

Tu as maintenant un **portfolio professionnel moderne et gratuit** prêt à impressionner les employeurs!

---

### Prêt? Commençons! 🚀

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000 et admire ton portfolio!

---

**Questions?** Lis `GUIDE_DEBUTANT.md` ou `GUIDE_DEPLOIEMENT.md`

**Besoin d'aide?** Cherche sur Google ou Stack Overflow

**Bonne chance!** 💪

---

*Portfolio créé automatiquement basé sur ton CV Amina Elphil*
