

const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
const {cards} = data;

// { variable } = Destructuring Statement that replaces:
// const data = require('../data/flashcardData.json').data
// const cards = data.cards;


// const cardData = [
//    { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is."},
//    { prompt: "Two", hint: "Bee"},
//    { prompt: "Three", hint: "Cee"},
//    { prompt: "Four", hint: "Dee"},
//    { prompt: "Five", hint: "Eee"}
// ];

/*
### /cards-Route
- All paths sent here start with `{domain}/cards`
- So `/`-path === `{domain}/cards`-path
-------------------------------------------------------------------------------------------------*/
router.get('/:id', (req, res) => {
   //res.render('card', cards[0]); // if cards[i] = {prompt: "one", hint: "alpha"} format
   const name = req.cookies.username;
   let {side} = req.query; // const side = req.query.side;
   const {id} = req.params;
   const text = cards[id][side];
   const {hint} = cards[id];
   let flip = 'question';
   let flipLabel = 'Question';
   let sideLabel = 'Answer';

   req.domain = process.env.DOMAIN; //flashcards-jcruz-axaeon.onrender.com
   res.cookie('domain', req.domain);

   // (!!!) Return stops execution avoiding redirect
   if(side!=='question' && side!='answer') {
      return res.redirect(`https://${req.domain}/cards/${id}/?side=question`);
   }

   if(side===flip) {
     flip = 'answer';
     flipLabel = 'Answer';
	sideLabel = 'Question';
   }

   const templateData = {name, id, side, text, flip, flipLabel};
   if(side==='question') templateData.hint = hint;

   res.render('card', templateData);
});

router.get('/', (req, res) => { 
   const cardId = Math.floor(Math.random() * cards.length);

   req.domain = process.env.DOMAIN; //flashcards-jcruz-workshop.onrender.com

   res.redirect(`https://${req.domain}/cards/${cardId}/?side=question`);
});

// //(V1) .render object
      // { prompt: cards[id].question,
      // hint: cards[id].hint }

module.exports = router;

