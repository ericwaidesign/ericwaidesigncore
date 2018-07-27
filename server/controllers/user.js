// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var User = require('../models/User');

// for testing
exports.test = function(req, res) {
    res.send('User test controller!');
};

exports.createUser = function(req, res) {
    var user = new User({
		username: req.body.username,
		password: req.body.password
    });

    user.save(function(err) {
        if (err) return next(err);
        res.send('User created successfully')
    })
};

exports.getUser = function(req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) return next(err);
    })
};

exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User updated.');
    });
};

exports.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};