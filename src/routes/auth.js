const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../lib/authenticate');

// Controllers
const authController = require('../controllers/auth');

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', isNotLoggedIn, authController.signUp);

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn, authController.signIn);

router.get('/signout', isLoggedIn, authController.signOut);

router.get('/profile', isLoggedIn, authController.profile);

module.exports = router;