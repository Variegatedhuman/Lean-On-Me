const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// route to get api/users
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to grab single user by id
router.get('/:id', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'post_text', 'created_at']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {  
                        model: Post,
                        attributes: ['title']
                    }
                }
            ]
        });
        if (!dbUserData) {
            res.status(404).json({ message: 'No user was found with this id' });
            return;
        }
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create a user
router.post('/signup', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        age: req.body.age,
        gender: req.body.gender,
        language: req.body.language,
      });
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.loggedIn = true;
  
        res.redirect(`/profile/${dbUserData.id}`);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// login route
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res.status(404).json({ message: 'The username or password you entered is incorrect' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'The username or password you entered is incorrect' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        // Redirect to profile page
        res.redirect('/profile');
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

// profile route
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Get the user data from the database
        const dbUserData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        // Pass the user data to the profile handlebars template
        const user = dbUserData.get({ plain: true });
        res.render('profile', { user });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

  

// Logout route
router.post("/logout", withAuth, (req, res) => {
    try {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

module.exports = router;