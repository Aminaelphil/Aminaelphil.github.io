# 🎓 Guide Débutant - Mettre son Portfolio en Ligne

Si tu n'as jamais utilisé GitHub Pages ou npm, ce guide est pour toi!

## 0️⃣ Prérequis (Gratuit)

Avoir:
- [ ] Un compte GitHub (gratuit sur github.com)
- [ ] Installer Git (git-scm.com)
- [ ] Installer Node.js (nodejs.org)

## 1️⃣ Configurer Git & GitHub

### Étape 1: Créer un compte GitHub

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "Sign up"
3. Entrer email, mot de passe, username
4. Valider ton email

### Étape 2: Configurer Git localement

Ouvrir le terminal/CMD et taper:

```bash
git config --global user.name "Amina Elphil"
git config --global user.email "aminaelphil@gmail.com"
```

### Étape 3: Générer une clé SSH (optionnel mais recommandé)

```bash
ssh-keygen -t ed25519 -C "aminaelphil@gmail.com"
```

Puis copier la clé publique dans GitHub Settings → SSH Keys

## 2️⃣ Créer le Repository GitHub

### Sur GitHub.com

1. Cliquer sur "+" en haut à droite → "New repository"
2. **Nom du repo**: `Aminaelphil.github.io` ⚠️ **IMPORTANT: Exact!**
3. Description: "Portfolio personnel"
4. Cocher "Public"
5. **NE PAS** cocher "Add README"
6. Cliquer "Create repository"

Tu verras une page avec:
```
…or create a new repository on the command line
git init
git add README.md
...
```

**Copie ces commandes**, on les utilisera.

## 3️⃣ Cloner & Préparer les Fichiers

### Étape 1: Créer un dossier

```bash
# Créer un dossier pour ton portfolio
mkdir portfolio
cd portfolio
```

### Étape 2: Copier les fichiers

Télécharge les fichiers du portfolio et place-les dans ce dossier:

```
portfolio/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── .gitignore
```

### Étape 3: Installer les dépendances

```bash
# Dans le dossier portfolio
npm install
```

⏳ Cela prendra 2-5 minutes. C'est normal!

## 4️⃣ Tester Localement

```bash
npm run dev
```

Le navigateur devrait ouvrir automatiquement `http://localhost:3000`

**Si tu vois ton portfolio = C'est bon!** ✅

Appuie sur Ctrl+C pour arrêter le serveur.

## 5️⃣ Uploader sur GitHub

### Étape 1: Initialiser Git

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### Étape 2: Ajouter le remote origin

⚠️ **Remplace `Aminaelphil` par ton nom d'utilisateur GitHub!**

```bash
git branch -M main
git remote add origin https://github.com/Aminaelphil/Aminaelphil.github.io.git
git push -u origin main
```

### Étape 3: Vérifie sur GitHub

1. Aller sur `github.com/Aminaelphil/Aminaelphil.github.io`
2. Tu devrais voir tes fichiers

## 6️⃣ Activer GitHub Pages

### Étape 1: Settings du repo

1. Dans GitHub, aller à **Settings**
2. À gauche, chercher **"Pages"**
3. Sous "Build and deployment":
   - **Source**: "GitHub Actions" ✅
   - GitHub Actions déploiera automatiquement!

### Étape 2: Attendre le déploiement

1. Aller à **Actions** dans le repo
2. Tu devrais voir un workflow "Deploy to GitHub Pages"
3. Attendre qu'il devienne ✅ (2-3 minutes)

### Étape 3: Visite ton site!

Après le déploiement, ton portfolio est sur:
```
https://Aminaelphil.github.io
```

**Partage ce lien partout!** 🎉

## 7️⃣ Modifier le Portfolio

### Pour changer le contenu:

1. Ouvrir `src/App.jsx` dans un éditeur (VSCode recommandé)
2. Trouver la section à modifier
3. Sauvegarder

### Pour tester les modifications:

```bash
npm run dev
```

### Pour publier les modifications:

```bash
git add .
git commit -m "Mise à jour portfolio"
git push origin main
```

⏳ Attendre 2-3 minutes. C'est en ligne! ✅

## 📦 Commandes Importantes

| Commande | Fonction |
|----------|----------|
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de développement |
| `npm run build` | Créer la version prête pour la prod |
| `git status` | Vérifier les changements |
| `git add .` | Ajouter les changements |
| `git commit -m "message"` | Créer un commit |
| `git push` | Envoyer vers GitHub |

## ❓ FAQs

### "Quelle est mon URL?"
`https://Aminaelphil.github.io` (remplace Aminaelphil par ton username)

### "Combien de temps le déploiement prend?"
2-5 minutes maximum. Rafraîchis le navigateur (Ctrl+Shift+R).

### "Puis-je utiliser mon propre domaine?"
Oui! Voir GitHub Pages settings → Custom domain (après)

### "Ça coûte combien?"
GRATUIT! GitHub Pages est 100% gratuit.

### "Je me suis trompé dans le nom du repo"
Supprimer le repo et le recréer avec le bon nom (`Aminaelphil.github.io`)

### "npm install échoue"
```bash
npm cache clean --force
npm install
```

### "npm run dev ne marche pas"
Vérifier Node.js:
```bash
node --version  # Doit être >= 16
npm --version   # Doit être >= 8
```

### "Le site n'est pas en ligne"
- Vérifier que le repo est public
- Vérifier que GitHub Actions est passé (Actions tab)
- Attendre 5 minutes et rafraîchir (Ctrl+Shift+R)

## 🎨 Personnaliser le Design

### Changer les couleurs

Ouvrir `src/App.jsx` et chercher:
- `cyan-400` → remplacer par une autre couleur Tailwind
- `blue-500` → remplacer par une autre couleur

Exemples: `red-500`, `green-400`, `purple-600`, etc.

### Changer le texte

Chercher les sections:
- `const experiences = [...]` - Tes stages
- `const skills = {...}` - Tes compétences
- `const languages = [...]` - Tes langues

## 📱 Tester sur Mobile

```bash
# Obtenir l'adresse IP locale
# Ensuite accéder à http://[IP]:3000 sur ton téléphone
```

## 🚀 Prochaines Étapes

Après avoir uploadé:

1. ✅ Tester sur mobile
2. ✅ Partager le lien avec tes amis/employeurs
3. ✅ Ajouter ton CV en PDF
4. ✅ Intégrer un formulaire de contact
5. ✅ Ajouter Google Analytics

## 💡 Tips Bonus

1. **Mettre à jour régulièrement** - Ajoute tes nouveaux projets
2. **Bien documenter** - Plus de détails = plus d'employeurs intéressés
3. **Ajouter des images** - Les portfolios avec images ont + de views
4. **Optimiser pour SEO** - Utiliser des mots-clés dans ton texte
5. **Partager partout** - LinkedIn, Twitter, Portfolio sites

## 📞 Aide

Si ça ne marche pas:

1. Vérifier la console pour les erreurs (F12)
2. Relire ce guide
3. Chercher l'erreur sur Google/Stack Overflow
4. Demander à un dev ami

---

**Félicitations! Tu as un portfolio moderne en ligne!** 🎉

N'hésite pas à le partager avec tout le monde!
