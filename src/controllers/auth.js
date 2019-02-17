const auth = {};

// Connection Database
const pool = require('../database');

// Passport
const passport = require('passport');

auth.signUp = passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
});

auth.signIn = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
};

auth.signOut = (req, res) => {
    req.logOut();
    res.redirect('/signin');
};


auth.profile = (req, res) => {
    res.render('auth/profile');
};


module.exports = auth;