const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
const path = require('path');

// helper functions
const helpers = require('./utils/helper')

// handle bars

// session (will connect session to sequelize db)
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// template engine for handle bars

// turn on routes
app.use(routes);

// connection for db and sever
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`))
});