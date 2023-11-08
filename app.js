

/*
### Teamtreehouse: Flashcard
- `filename`: app.js
- `stack` : Node.js, Express
- `description` : Team Treehouse Practice.  Use Node.js, and express to create a flashcard app
- `code` : 6423
- `author` : jcruzaxaeon
- `knownBugs`: { 
      '0001': 'Investigate body-parser error',
      '0002': 'Cards available without "login".  Create error checking redirects.'
   }
-------------------------------------------------------------------------------------------------*/



/*
### Dependencies, Globals
-------------------------------------------------------------------------------------------------*/
const express = require('express');              // Dependency: require "express"
const cookieParser = require('cookie-parser');
const app = express('public');

/*
### Load Static Assets
- Express makes contents of '/public' available from the root
-------------------------------------------------------------------------------------------------*/
app.use('/static', express.static('public') );

/*
### Third-Party Middleware
-------------------------------------------------------------------------------------------------*/
app.use( express.urlencoded() );   // Used to parse incoming POST-data (body-parser functionality)
app.use( cookieParser() );

/*
### Initialize (Template / View) Engine
-------------------------------------------------------------------------------------------------*/
app.set('view engine', 'pug');

/*
### Modular Routing
-------------------------------------------------------------------------------------------------*/
const mainRoutes = require('./routes'); // No filename in call since "index.js" is default-target
const cardRoutes = require('./routes/cards'); // Must include filename

app.use(mainRoutes);

/*
### Modular Routing
- `app.use( {Route / URL-path}, {middleware (functions / file)} )
- All requests starting with `{domain}/cards` will be caught by `app.use('/cards', {...})`
- So every route sent to `cards.js` will start with `{domain}/cards`
- `cards.js` pathing does not *need* to include `/cards` only the pathing under `/cards`
-------------------------------------------------------------------------------------------------*/
app.use('/cards', cardRoutes);

/*
### 404 Guard-Clause (Middleware)
-------------------------------------------------------------------------------------------------*/
app.use( (req, res, next) => {
   const err = new Error("Page Not Found");
   err.status = 404;
   next(err);
});

/*
### Custom Global Error-Handler (Middleware)
-------------------------------------------------------------------------------------------------*/
app.use( (err, req, res, next) => {
   res.locals.error = err;
   res.status(err.status);
   res.render('error');
});

/*
### Development-Server
-------------------------------------------------------------------------------------------------*/
app.listen(3000, () => {
   console.log('Flashcard is running on: localhost:3000');
});

