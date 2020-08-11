/**
 * Auth.js - contains middleware for our log in and sign up routes
 * Uses unique token generated at each log in to ensure user is 
 * signed up and sign in before performing functions 
 * Step 11:
 */


const { User } = require('../models/User');

let auth = (req, res, next) => {
  let token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
