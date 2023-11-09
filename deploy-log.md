

# Flashcards
- `filename` : deploy-log.md
- `version` : 0.0.1
- `student` : jcruzaxaeon
- `organizationOfStudent` : Team Treehouse
- `organizationType` : Code Academy
- `certificate` : Fullstack
- `appName` : Flashcards
- `appCode` : tth64
- `unit` : 6
- `chapter` : 4
- `chapterName` : Express Basics
- `chapterType` : Course
- `versionDescription` : Final state after completing Team-Treehouse-course "Express Basics" (Unit 6, Step 5).
- `subjects` : []
    - Node.js
    - Express
- `keyDescriptions` : {}
    - `chapter`: Code for "Step" in Team Treehouse lesson hierarchy: "Unit" > "Step" (Instruction / Course / Workshop / Project).  Altered from "Step" to more closely match a textbook naming-convention (Unit > Chapter > Part > Section > Item ). See uscode.house.gov, "Detailed Guide to the Code" for a generic guide to subdividing text.

## render.com
- `availableRuntimes` : []
   - Docker
   - Elixir
   - Go
   - Node
   - Python 3
   - Ruby
   - Rust

## Deployment Log
1. Create a `render.com` account, sign-in
1. Start new `Web Service`
1. (Optional) Link `GitHub`
1. Set a detailed web-app name.  Use a format like `application-user-organization`.
1. Set render's `root`-directory as folder containing entry-point-file (e.g. index.js / app.js) relative to repo-root
   - Leave blank if entry-point-file is located in repo root/
1. Set `Build Command` to `npm install`
1. Set `Start Command` to `node {Entry Point Filename}.js` (e.g. `node app.js`)
1. Click `Advanced Options` > `Add Environemnt Variable`
   - `PORT`: 3000
   - `domain`: `application-user-organization.onrender.com`