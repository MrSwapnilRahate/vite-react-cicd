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
-------------------------------------------------------------------------

## Step 4: CD Build output ko host Vercel pe
# Step 1: Vercel Account
Vercel pe jao
GitHub se signup/login karo
Free plan choose karo

# Step 2: GitHub repo connect karo
Dashboard → New Project
Import Git Repository → tumhara vite-react-cicd repo select karo
Framework detect automatically: Vite
Build settings:
Build command: npm run build
Output directory: dist
Deploy button press karo
✅ Ye first deploy complete karega → Vercel tumhe live URL dega

# Step 3: Auto-deploy setup
Har push ke baad Vercel automatically build + deploy karega
Tumhe manually kuch nahi karna
--------------------------------------------------------------------


## Notes 
# Step 1: GitHub Actions ka basic idea
Purpose: Tumhare code ko automatically build + test + deploy karna jab bhi push hota hai

Example: Tum main branch me code push karte ho → GitHub Actions automatically run hota hai → project build hota hai → errors dikhe to pata chal jata hai

Think of it like robot developer jo har push pe project ko check kar raha hai.

# Step 2: Workflow file create karna

Location: .github/workflows/ci.yml

Purpose: Ye file batati hai GitHub Actions ko kya karna hai

Example:
name: Vite React CI/CD        # Workflow ka naam

on:
  push:
    branches: [ main ]  # main branch me push hone par chale
  pull_request:
    branches: [ main ]  # PR create hone par bhi chale

jobs:
  build:
    runs-on: ubuntu-latest  # OS jahan workflow chalega

    steps:
      - name: Checkout code
        uses: actions/checkout@v3   # Code ko GitHub se copy kare

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'        # Node version set kare

      - name: Install dependencies
        run: npm install            # npm packages install kare

      - name: Build project
        run: npm run build          # Project build kare
