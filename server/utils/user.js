// Invoke 'strict' JavaScript mode
'use strict'

/**
 * The JWT (JSON Web Token) contains 3 encoded sections: 
 * The 1st is the header contains information about the token;
 * The 2nd is the payload contains the data that is being sent;
 * The 3rd is the vertification signature use to verify the data has 
 *  not been changed.
 * @param {*} headers  
 */
exports.getToken = function (headers) {
	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
};