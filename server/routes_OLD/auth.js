// server/routes/auth.js

// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const authController = require('../controllers/auth');
const express = require('express');
const passport = require('passport');
 
const requireAuthenticate = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});

/* 
 * Module initialization
 */
module.exports = function(app) {
 
    var apiRoutes = express.Router();
    var authRoutes = express.Router();
 
    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
    
    authRoutes.post('/register', authController.register);
    authRoutes.post('/login', requireLogin, authController.login);
    authRoutes.get('/protected', requireAuthenticate, function(req, res) {
        res.send({ content: 'Success'});
    });

    // ../api/auth/..
    app.use('/api', apiRoutes);

}