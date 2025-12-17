## Github Action CICD Pipeline my-app

# create Project
npm create vite@latest my-app
cd my-app
npm run dev
npm install react-router-dom

# Project GitHub pe push karo
git config --global user.email "swapnilrahate6598@gmail.com"
git config --global user.name "Swapnil Rahate"     

git config --global --list
git init
git add .
git commit -m "Initial Vite React setup"

## STEP 1: GitHub Repo bnao
# GitHub Site pe jao
New Repository
vite-react-cicd
public
README.md (esko mt add karo)
Create Repo
[Repo Link](https://github.com/MrSwapnilRahate/vite-react-cicd.git)

## STEP 2: Remote add karo
# VS Code Terminal me
git branch -M main
git remote add origin https://github.com/MrSwapnilRahate/vite-react-cicd.git
git push -u origin main

## Step 3: GitHub Actions CI/CD workflow bnao 
VS Code me apne project me ".github" ka folder bnao
uske andr ek aur folder bnao "workflow"
uske andr "main.yml" nam ki file bnao
(.github/workflow/main.yml)

git add .
git commit -m "Add GitHub Actions CI pipeline"
git push
(GitHub repo me Actions tab me Workflow dikhega)