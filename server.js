const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const commentRoutes = require('./controllers/api/comment-routes');



// setup
 
async function getCord(){
    const apikey= "5d8f706975b0652dc3b0077ecad2304a";
    const search = "251 E Huron St, Chicago, IL 60611";
    const coordinatesURL= `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apikey}`
   
    const res = await fetch(coordinatesURL);
    const data = await res.json();
    console.log(data);

}
getCord();



const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
    helpers
});

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 50000000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Set up Handlebars views directory
app.set('views', path.join(__dirname, 'views'));

app.use(session(sess));

app.use('/api/comments', commentRoutes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening', PORT));
});

