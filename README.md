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
## Interview ke liye BAS yahi yaad rakho
# 1 GitHub Actions kya hai
GitHub ka built-in tool jo CI/CD automate karta hai

# 2 Pipeline ka flow
Code push → Build → (Test) → Deploy

# 3 .yml file ka role
Saari pipeline logic .github/workflows/*.yml me hoti hai

# 4 Core terms (sirf naam + meaning)
Workflow – poori pipeline
Job – ek kaam (build)
Step – individual command
Runner – VM jahan pipeline run hoti hai

# 5 Triggers
push
pull_request
workflow_dispatch

# 6 Common steps (React/Vite)
actions/checkout
actions/setup-node
npm install
npm run build

# 7 interview-ready answer (rat lo)
“I use GitHub Actions to create a CI/CD pipeline which runs on every push to main branch, installs dependencies, builds my Vite React app and can deploy it automatically.”

# -----------------------------------------------------------------------

## .yml file (CI file)
root folder (project ka)
usme ".github" nam ka folder
usme "workflow" nam ka folder
usem "main.yml" nam ki file

# main.yml
name: Vite React CI/CD
on:
    push: 
        branches: [ main ]
    pull_request:
        branches: [ main ]
    workflow_dispatch:
jobs:
    build:
        runs-on: ubuntu-latest

        steps: 
            - uses: actions/checkout@v3

            - uses: actions/setup-node@v3
              with:
                node-version: 20

            - name: Install dependencies
              run: npm install

            - name: Build project
              run: npm run build

# -------------------------------------------------------------------

## Daily-Use Git Commands (Frontend Production)

# 1 Project start / copy karna
| Command                       | Simple use (Hindi)                           |
| ----------------------------- | -------------------------------------------- |
| `git init`                    | Apne system par naya git project start karna |
| `git clone <url>`             | GitHub se project copy karna                 |
| `git remote -v`               | Project kis GitHub repo se juda hai, dekhna  |
| `git remote add origin <url>` | Local project ko GitHub repo se jodna        |


# 2 Daily coding ke time (MOST USED)
| Command               | Simple use (Hindi)                             |
| --------------------- | ---------------------------------------------- |
| `git status`          | Kaunsi files change hui hain, dekhna           |
| `git add .`           | Sabhi changed files commit ke liye ready karna |
| `git add <file>`      | Sirf ek file add karna                         |
| `git commit -m "msg"` | Changes ko save karna                          |
| `git push`            | Code GitHub par bhejna                         |
| `git pull`            | GitHub se latest code lana                     |

# 3 Team me kaam karte waqt (Branch use)
| Command                            | Simple use (Hindi)                |
| ---------------------------------- | --------------------------------- |
| `git branch`                       | Sabhi branches dekhna             |
| `git checkout -b feature/login`    | Nayi branch banana + switch karna |
| `git checkout main`                | Main branch par wapas aana        |
| `git push -u origin feature/login` | Apni branch GitHub par bhejna     |

# 4 Merge & review ke time
| Command             | Simple use (Hindi)                      |
| ------------------- | --------------------------------------- |
| `git merge main`    | Main branch ka code apni branch me lana |
| `git log --oneline` | Commit history short me dekhna          |
| `git diff`          | Changes compare karna                   |

# 5 Galti ho jaye to fix karne ke commands
| Command                 | Simple use (Hindi)          |
| ----------------------- | --------------------------- |
| `git restore <file>`    | File ke changes hata dena   |
| `git reset HEAD <file>` | File ko unstage karna       |
| `git commit --amend`    | Last commit ko change karna |
| `git stash`             | Kaam temporarily save karna |

# 6 CI/CD se related (Frontend level)
| Command    | Simple use (Hindi)                      |
| ---------- | --------------------------------------- |
| `git push` | Push karte hi CI/CD pipeline chalti hai |

# 7 Interview ke liye MOST IMPORTANT (yaad rakhna)
| Command             | Kyun important     |
| ------------------- | ------------------ |
| `git status`        | Har kaam se pehle  |
| `git add .`         | Commit se pehle    |
| `git commit`        | Changes save       |
| `git push`          | Code share + CI/CD |
| `git pull`          | Conflict avoid     |
| `git branch`        | Team work          |
| `git checkout -b`   | Feature kaam       |
| `git merge`         | Code combine       |
| `git stash`         | Emergency save     |
| `git log --oneline` | History            |

# --------------------------------------------------------------------------------------

