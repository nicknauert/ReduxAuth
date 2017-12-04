const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT strat
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT Strat
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  // See if user ID in payload exists in DB
  // true -> call done with that user
  // false -> call done w/o user object
  User.findById(payload.sub, function(err, user){
    if ( err ) { return done(err, false); }

    if ( user ){
      done( null, user);
    } else {
      done( null, false );
    }
  })
});

// Tell Passport to use this strat

passport.use(jwtLogin);