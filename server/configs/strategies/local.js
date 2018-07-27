// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var passport = require('passport');
var User = require('../../models/User');
var LocalStrategy = require('passport-local').Strategy;

// use the 'email' field instead of a 'username' field
var localOptions = {
    usernameField: 'email'
};

/**
 * 
 */
var localLogin = new LocalStrategy(localOptions, function (email, password, done) {
	// use Mongoose findone() to find a User with matching email
	User.findOne({
		email: email
	}, function (err, user) {
		if (err) return done(err);
		if (!user) {
			return done(null, false, { error: 'Login failed. Please try again.' });
		}
		// compare the email between the given password and the one from DB  
		user.comparePassword(password, function (err, isMatch) {
			if (err) return done(err);
			if (!isMatch) {
				return done(null, false, { error: 'Login failed. Please try again.' });
			}
			return done(null, user);
		});
	});
});

// set strategy on Passport
passport.use(localLogin);