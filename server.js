const express = require("express");
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');


// session middleware
app.use(session({
    secret: "feedmeseymour", //a random string do not copy this value anywhere public or your stuff will get hacked
    resave: false,
    saveUninitialized: false
}));

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/userparksdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

/////////////

const parksController = require('./controllers/parks_router.js');
app.use('/index', parksController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);



// Web server:
app.listen(3001, () => {
    console.log("listening");
  });