// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var authController = require('../controllers/auth');
var userController = require('../controllers/user');
var express = require('express');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});

/* 
 * Module initialization
 */
module.exports = function(app) {

    var apiRoutes = express.Router();
    var userRoutes = express.Router();

    // User Routes
    apiRoutes.use('/user', userRoutes);

    userRoutes.route('/')
        .get(requireAuth, authController.roleAuthorization(['user', 'admin', 'owner']), userController.getUsers)
        .post(requireAuth, authController.roleAuthorization(['user', 'admin', 'owner']), userController.createUser);
    userRoutes.delete('/:user_id', requireAuth, authController.roleAuthorization(['user', 'admin', 'owner']), userController.deleteUser);

    app.use('/api', apiRoutes);

}