const express = require('express');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

mongoose.connect('mongodb://localhost/auth_demo', { useNewUrlParser: true });

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
  secret: 'Geralt',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =============
// Routes
// =============

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', isLoggedIn, (req, res) => {
  res.render('secret');
});

// Auth Routes
// Render sign up form
app.get('/register', (req, res) => {
  res.render('register');
});

// Handle user sign up
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  User.register(new User({ username }), password, () => {
    passport.authenticate('local')(req, res, () => {
      res.redirect('/secret');
    });
  });
});

// Login routes
// Render login form
app.get('/login', (req, res) => {
  res.render('login');
});

// Handle user login
app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login',
}), () => {
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server has started on port 3000!');
});
