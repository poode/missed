const passport = require('passport');

// const { facebookStrategy } = require('./web/facebook');
// const { googleStrategy } = require('./web/google');
// const { facebookTokenStrategy } = require('./mobile-web/facebook');
// const { googleTokenStrategy } = require('./mobile-web/google');
const { jwtStrategy } = require('./jwt');

// passport.use(facebookStrategy);
// passport.use(googleStrategy);
// passport.use(facebookTokenStrategy);
// passport.use(googleTokenStrategy);
passport.use(jwtStrategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = {
  passport,
  jwt: (options = {}) => passport.authenticate('jwt', options),
};
