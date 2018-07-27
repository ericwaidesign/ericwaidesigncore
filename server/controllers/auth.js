// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var jwt = require('jsonwebtoken'); 
var User = require('../models/user');
var generalConfig = require('../configs/general');

/**
 * Generates a JWT for a user.
 * @param {*} user 
 */
function generateToken(user) {
    return jwt.sign(user, generalConfig.secret, {
        expiresIn: 10000
    });
}

/**
 * Sets required information for JWT. This information will
 * not contain sensitive data such as password.
 * @param {*} request 
 */
function setUserInfo(request) {
    return {
        _id: request._id,
        email: request.email,
        role: request.role
    };
}

/**
 * Sends the JWT back to user(mobile app) to be use for authenticate
 * each request send to server. User should be authenticated by Password
 * prior to calling this method.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login = function(req, res, next) {
    var userInfo = setUserInfo(req.user);
    res.status(200).json({
        token: 'JWT ' + generateToken(userInfo),
        user: userInfo
    });
}

/**
 * Creates a new user if the given data (if the given email(username))
 * does not exist in the DB. Then, send a JWT back to user.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.register = function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;

    if(!email) {
        return res.status(422).send({error: 'You must enter an email address'});
    }
    if(!password) {
        return res.status(422).send({error: 'You must enter a password'});
    }

    User.findOne({email: email}, function(err, existingUser) {
        if(err)return next(err);
        if(existingUser) {
            return res.status(422).send({error: 'That email address is already in use'});
        }

        var user = new User({
            email: email,
            password: password,
            role: role
        });

        user.save(function(err, user) {
            if(err) {
                return next(err);
            }
            var userInfo = setUserInfo(user);
            res.status(201).json({
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo
            })
        });
    });
}

/**
 * Defines roles to allow access to the route with the given array
 * of roles. User will be allowed to access the route if their JWT
 * contains the appropriate role.
 * @param {*} roles 
 */
exports.roleAuthorization = function(roles) {
    return function(req, res, next){
        var user = req.user;
        
        // find the user by ID then check their role
        User.findById(user._id, function(err, foundUser) {
            if(err) {
                res.status(422).json({error: 'No user found.'});
                return next(err);
            }
            if(roles.indexOf(foundUser.role) > -1) {
                return next();
            }
            res.status(401).json({error: 'You are not authorized to view this content'});
            return next('Unauthorized');
        });
    }
}