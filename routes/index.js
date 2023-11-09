

const express = require('express');

/*
### Router
- Like a mini-app inside of Express
- You can add middleware, and routes to a router
-------------------------------------------------------------------------------------------------*/
const router = express.Router();

/*
### root-Route
-------------------------------------------------------------------------------------------------*/
router.get('/', (req, res) => {
  const name = req.cookies.username;
  req.domain = process.env.DOMAIN; //flashcards-jcruz-axaeon.onrender.com
  console.log(req.domain);

  // Redirects
  if(name)   res.render   ('index', { name });
  else       res.redirect ('/hello');
});
  
/*
### /goodbye-Route
-------------------------------------------------------------------------------------------------*/
router.post('/goodbye', (req, res) => {
	const cookies = ['username', 'status'];
  
	cookies.forEach( cookie => res.clearCookie(cookie) );
	res.redirect('/hello');
});
  
  /*
  ### /sandbox-Route
  -------------------------------------------------------------------------------------------------*/
  router.get('/sandbox', (req, res) => {
	res.render('sandbox', {
	   cardData
	});
  });
  
/*
### /hello-Routes
-------------------------------------------------------------------------------------------------*/
router.get('/hello', (req, res) => {
  const name = req.cookies.username;

  // Redirects
  if(name)   res.redirect ('/');
  else       res.render   ('hello');
});
 
router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.cookie('status', 'logged-in')
 
  res.redirect('/');
});

module.exports = router;

