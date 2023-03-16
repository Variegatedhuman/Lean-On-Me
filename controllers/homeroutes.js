const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const { Sequelize } = require("sequelize");

router.get('/', (req, res) => {
<<<<<<< HEAD
  // Render the homepage template





  res.render('search',{
    markerList: ["full list"]
  });
=======
  res.render('search');
>>>>>>> edf87f45f5df5567bc89d1ea2b437680f08e7808
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAllPosts({
    });
    const postData = posts.map((post) => post.get({ plain: true }));
    res.render('opportunities', { postData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.post('/search', async (req, res) => {
  const searchTerm = req.body.searchTerm;
  const category = req.body.category;

  let opportunities = [];

  if (searchTerm) {
    opportunities = await Post.findAll({
      where: Sequelize.where(
        Sequelize.fn('LOWER', Sequelize.col('post_text')),
        'LIKE',
        '%' + searchTerm.toLowerCase() + '%'
      )
    });
  } else {
    opportunities = await Post.findAll();
  }

  if (category && category !== 'All') {
    opportunities = opportunities.filter(
      (opportunity) => opportunity.category === category
    );
  }

  console.log(opportunities)
  const opps = opportunities.map((opp) => opp.get({ plain: true }));
  console.log({ opps })
  // res.render('opportunities', { opportunities: opps });
  res.json({ opportunities: opps })
});

module.exports = router;