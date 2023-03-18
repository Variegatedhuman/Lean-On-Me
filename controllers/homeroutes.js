const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const { Sequelize } = require("sequelize");
const { hospitalList, educationList, hmList, animalList } = require('../config/locationData');

router.get('/', (req, res) => {
  // Render the homepage template
  const fullList = hospitalList.concat(educationList).concat(animalList).concat(hmList);

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
  }
 
  console.log("what are we getting?", queryList)

  res.render('home',{
    markerList: queryList,
  })
  ;
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