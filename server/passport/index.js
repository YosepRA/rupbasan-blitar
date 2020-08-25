const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy(async function (username, password, done) {
    let user = await User.findOne({ username });
    if (!user || !(await user.checkPassword(password)))
      return done(null, false, {
        message: 'Username atau password tidak cocok.',
      });
    return done(null, user);
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  let user = await User.findById(id);
  done(null, user);
});

module.exports = passport;
