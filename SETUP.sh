#!/usr/bin/env bash

# Portfolio Amina Elphil - Setup Script
# Ce script automatise l'installation et le déploiement

echo "🎯 Portfolio Amina Elphil - Setup"
echo "=================================="
echo ""

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé!"
    echo "Télécharge-le sur https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js installé: $(node --version)"
echo "✅ npm installé: $(npm --version)"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install
echo "✅ Dépendances installées!"
echo ""

# Instructions suivantes
echo "🚀 Prochaines étapes:"
echo ""
echo "1. Lancer le serveur de développement:"
echo "   npm run dev"
echo ""
echo "2. Ouvrir http://localhost:3000 dans ton navigateur"
echo ""
echo "3. Pour le déploiement:"
echo ""
echo "   3a. Créer un repo GitHub: Aminaelphil.github.io"
echo "   3b. git init"
echo "   3c. git add ."
echo "   3d. git commit -m 'Initial portfolio'"
echo "   3e. git remote add origin https://github.com/TON_USERNAME/Aminaelphil.github.io.git"
echo "   3f. git push -u origin main"
echo ""
echo "4. Attendre 2-3 minutes et visiter:"
echo "   https://Aminaelphil.github.io"
echo ""
echo "📖 Guides disponibles:"
echo "   - README.md (Vue d'ensemble)"
echo "   - GUIDE_DEBUTANT.md (Pas à pas détaillé)"
echo "   - GUIDE_DEPLOIEMENT.md (Déploiement avancé)"
echo ""
echo "✨ Bon courage! 🚀"
