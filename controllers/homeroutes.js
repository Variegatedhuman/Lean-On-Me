const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  // Render the homepage template
  res.render('login');
});

// redirecting users to homepage once they log in
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
      res.redirect('/');
      return; 
  }
  res.render('login');
});

// render the signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;