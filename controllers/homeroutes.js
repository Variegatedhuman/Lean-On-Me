const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const { Sequelize } = require("sequelize");
const { hospitalList, educationList, hmList, animalList, elderlyCareList, environmentalList } = require('../config/locationData');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  // Render the homepage template
  const fullList = hospitalList.concat(educationList).concat(animalList).concat(hmList).concat(elderlyCareList).concat(environmentalList);

  console.log("fulllist:",fullList);
  res.render('home',{
    markerList: fullList,

  });
});

router.post('/', (req, res) => {
  // Render the homepage template
  console.log("my selections:",req.body)
  let queryList;

  if(req.body.category === 'healthcare'){
    queryList = hospitalList
  }else if(req.body.category === 'education'){
    queryList = educationList;
  }else if(req.body.category === 'humanitarian'){
    queryList = hmList;
  }else if(req.body.category === 'animals'){
    queryList = animalList;
  }else if(req.body.category === 'elderly'){
    queryList = elderlyCareList;
  }else if(req.body.category === 'environment'){
    queryList = environmentalList;
  }
 
  console.log("what are we getting?", queryList)

  res.render('home',{
    markerList: queryList,
  })
})
  ;
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

router.get('/post/:id/comment', async (req, res) => {
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

router.get('/test', async (req, res) => {
  try {
    const posts = await Post.findAll({
    });
    const postData = posts.map((post) => post.get({ plain: true }));
    console.log(postData)
    res.render('search', postData );
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

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;