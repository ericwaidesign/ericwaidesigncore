// Invoke 'strict' JavaScript mode
'use strict'

const path = require('path');

/**
 * @description Return given file name without the extension.
 * @param {string} fileName
 */
exports.getFileNameWithoutExtension = (fileName) => {
    return fileName.split('.')[0];
}

/**
 * @description Join(check) the given relative path against the path of the current executing file (__dirname).
 * @param {string} relativePath
 */
exports.getRelativePath = (relativePath) => {
    return path.join(__dirname, relativePath);
}

/**
 * @description join(check) the given paths
 */
exports.joinPaths = (path1, path2) => {
    return path.join(path1, path2);
}