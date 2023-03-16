const router = require('express').Router();

router.get('/', (req, res) => {
  // Render the homepage template
  res.render('login');
});

// render the signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;