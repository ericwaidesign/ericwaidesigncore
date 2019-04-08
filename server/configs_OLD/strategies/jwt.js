// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var passport = require('passport');
var User = require('../../models/User');
var config = require('../general');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var jwtOptions = {
    // extract JWT sent with the request
	jwtFromRequest: ExtractJwt.fromAuthHeader(),
	secretOrKey: config.secret
};

/**
 * 
 */
var jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    // use the _id from the JWT to match a user
	User.findById(payload._id, function (err, user) {
		if (err) return done(err, false);
		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

// set strategy on Passport
passport.use(jwtLogin);