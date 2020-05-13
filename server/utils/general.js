'use strict'	

const path = require('path');	

/**	
 * @description Join(check) the given relative path against the path of the 	
 *  current executing file (__dirname).	
 * @param {string} relativePath	
 */	
exports.getRelativePath = (relativePath) => {	
    return path.join(__dirname, relativePath);	
}