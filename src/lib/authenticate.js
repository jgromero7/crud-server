const authentcate = {};

authentcate.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    } else{
        return res.redirect('/signin');
    }
};

authentcate.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()){
        return next();
    } else{
        return res.redirect('/profile');
    }
};

module.exports = authentcate;