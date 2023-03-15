const router = require('express').Router();

router.get('/', (req, res) => {
  // Render the homepage template
  res.render('login');
});

module.exports = router;