// Invoke 'strict' JavaScript mode
'use strict'

module.exports = {
	// secret password to be used for the verification signature section of the JWT
	secret: '{secret}',
	port: process.env.PORT || 3000,
	db: {
		uri: '{db uri}'
	},
	url: '{heroku url}'
};
