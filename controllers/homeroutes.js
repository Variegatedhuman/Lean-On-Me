const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const { Sequelize } = require("sequelize");

router.get('/', (req, res) => {
  // Render the homepage template

  res.render('search',{
    markerList: ["full list"]
  });
});

router.post('/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/posts/:id/comment', async (req, res) => {
  try {
    const postId = req.params.id;
    const comments = await Comment.findAll({
      where: {
        post_id: postId
      }
    });
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
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