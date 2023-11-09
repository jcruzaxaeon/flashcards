

# Flashcards
- By jcruz
- Developed as guided-practice following a Team Treehouse (Code Academy) lesson:
   - Introduction to `Node.js`, and `Express`
- Deployed independently
- Last update 11/8/2023

## Stack
- `runtimeEnvironment`: Node.js
- `packageManager`: npm
- `webAppFramework`: Express
- `templateEngine`: Pug

## Development Tool Roster
- `textEditors` : VSCode, vim
- `cliTool`: nodemon
- `workstation`: Windows 11 > WSL2 > Linux: Debian 10 
- `middleware`: 
   - body-parser; embedded in `app.use(express.urlencoded())`.  May be deprecated.
   - cookie-parser

## Deployment Tool Roster
- `hosting`: render.com
- `centralRepo`: GitHub

## Metadata
- `version`: 1.0.0
- `student`: jcruzaxaeon
- `organizationOfStudent`: Team Treehouse
- `organizationType`: Code Academy
- `certificate`: Fullstack
- `appName`: Flashcards
- `appCode`: tth64
- `unit`: 6
- `chapter`: 4
- `chapterName`: Express Basics
- `chapterType`: Course
- `versionDescription`: Final state after completing Team-Treehouse-course "Express Basics" (Unit 6, Step 5).
- `subjects`: []
    - Node.js
    - Express
- `keyDescriptions`: {}
    - `chapter`: Code for "Step" in Team Treehouse lesson hierarchy: "Unit" > "Step" (Instruction / Course / Workshop / Project).  Altered from "Step" to more closely match a textbook naming-convention (Unit > Chapter > Part > Section > Item ). See uscode.house.gov, "Detailed Guide to the Code" for a generic guide to subdividing text.

## Action Roster
1. [ ] Test render.com deployment
1. [ ] Start a spreadsheet with questions/answer pairs
1. [ ] Final refactor: clean up comments, remove uneeded files
1. [ ] Link render.com deployment to portfolio site.
1. [ ] Some part of the [URL Encoding] needs to be updated (non-breaking).  Terminal logs "deprecated".
   ```javascript
   // Used to parse incoming POST-data (body-parser functionality)
   app.use(express.urlencoded());
   ```
1. [ ] Hide `hints` until user clicks a `show hints`-button
   - Present a show-hints button
   - Hide hint by default
1. [ ] Create different flashcard sets
   - Add ability to switch between different sets, possibly organized by theme
1. [ ] Connect to a database - See TTH courses
   - We are currently getting the data from a `flat.JSON`-file
   - Normally this kind of app would be connected to a database
   - Database allows user to store new flashcards through the app itself
   - As of right now, we need to edit the JSON file (manually / directly) to "create" new cards
1. [ ] Add users / authentication
   - See TTH-course on authentication and users

## Main

### Devlog

#### November 8, 2023
- [x] Refactor for render.com deployment
- [x] Use render.com environment variables
- [x] Update .gitignore - Remove `design/` from git-tracking.  Used `$ git rm -r --cached design`.
- [x] Push to GitHub

### Notes

### Code Dump

## Reference

