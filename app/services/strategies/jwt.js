const { Strategy } = require('passport-jwt');

const { ServerError } = require('../../util')
const { getUserById } = require('../user.service');

const JWTStrategy = Strategy;

const strategyOptions = {
  jwtFromRequest: req => req.get('Authorization'),
  secretOrKey: process.env.JWT_SECRET,
  passReqToCallback: true
}

const verifyCallback = async (req, jwtPayload, done) => {
  const { err, user } = await getUserById(jwtPayload.user.id);

  if (err) {
    return done(new ServerError(err, 404));
  }

  req.user = user
  return done(null, user);
}

exports.jwtStrategy = new JWTStrategy(strategyOptions, verifyCallback);
