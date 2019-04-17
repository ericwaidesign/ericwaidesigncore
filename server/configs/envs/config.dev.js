"use strict"

module.exports = {
	// secret password to be used for the verification signature section of the JWT
	PORT: process.env.PORT || 80,
	DB: {
        DEBUG: true,
        MONGODB: "postdb1",
        HOST: "core:Password1!@ds233531.mlab.com:33531",
	}
};
