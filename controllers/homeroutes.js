const router = require('express').Router();

router.get('/', (req, res) => {
  // Render the homepage template
  res.render('search');
});

module.exports = router;