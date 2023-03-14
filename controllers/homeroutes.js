const router = require('express').Router();

router.get('/', (req, res) => {
  // Render the homepage template
  res.render('main');
});

module.exports = router;