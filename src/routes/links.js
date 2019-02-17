const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/authenticate');

// Controllers
const linksController = require('../controllers/links');

router.get('/', isLoggedIn, linksController.read);

router.get('/add', isLoggedIn, (req, res) => {
    res.render('links/add');
});

router.post('/add', isLoggedIn, linksController.create);

router.get('/update/:id', isLoggedIn, linksController.readById);

router.post('/update/:id', isLoggedIn, linksController.update);

router.get('/delete/:id', isLoggedIn, linksController.delete);

module.exports = router;