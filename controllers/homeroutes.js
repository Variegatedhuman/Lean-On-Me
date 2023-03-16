const router = require('express').Router();
const projectData = require('../seeds/projectData.json');
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  // Render the homepage template
  res.render('search');
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

// handle the form submission on the search page
router.post('/search', (req, res) => {
  const searchTerm = req.body.searchTerm;
  const category = req.body.category;

  let opportunities = projectData;

  // Filter opportunities based on search term
  if (searchTerm) {
    opportunities = opportunities.filter(opportunity => opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  // Filter opportunities based on category
  if (category && category !== "All") {
    opportunities = opportunities.filter(opportunity => opportunity.category === category);
  }

  res.render('opportunities', { opportunities: opportunities });
});

module.exports = router;