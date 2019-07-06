
exports.createUser = function (req, res) {
    let user = new user(
        {
            name: req.body.name
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }

        res.send('User created successfully.');
    });
}

exports.getUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }

        res.send(user);
    });
}

exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body },
        function (err, user) {
            if (err) {
                return next(err);
            }

            res.send('User updated.');
        });
}

exports.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }

        res.send('Deleted successfully.');
    })
}

exports.getUserByName = function (req, res) {
    User.find({name: req.params.name},
        function (err, user) {
            if (err) {
                return next(err);
            }

            res.send(user);
        });
}