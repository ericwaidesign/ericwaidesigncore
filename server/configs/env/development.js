// Invoke 'strict' JavaScript mode
'use strict'

module.exports = {
	// secret password to be used for the verification signature section of the JWT
	secret: 'secret',
	port: process.env.PORT || 3000,
	db: {
		uri: 'mongodb://core:Password1!@ds233531.mlab.com:33531/postdb1'
	},
	url: 'https://ericwaidesigncore.herokuapp.com/'
};
