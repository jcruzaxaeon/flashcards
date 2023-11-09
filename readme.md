

# Flashcards
By jcruz as Team Treehouse (Code Academy) practice

## Development Tool Roster
- `text-editor` : VSCode
- nodemon
- `workstation`: Windows 11 > WSL2 > Linux: Debian 10 
- cookie-parser
- Pug

## Deployment Tool Roster
- `hosting`: render.com
- `centralRepo`: GitHub


## Stack
- Node.js
- Express

## Metadata
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

## ( Action Roster / Todo List )
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
- [x] Update .gitignore - Remove `design/` from git-tracking.  Used `$ git rm -r --cached design`.
- [x] Push to GitHub

### Notes

### Code Dump

## Reference

### Tool Roster
Tools Used, Dependencies, Requires, Packages

- cookie-parser
- Pug
- express
- `app.use(express.urlencoded())`.  May be deprecated.

