const Session = require('./model');

exports.createSession = function (req, res) {
    let session = new Session(
        {
            user: req.body.user,
            room: req.body.room
        }
    );

    session.save(function (err) {
        if (err) {
            return next(err);
        }

        res.send('Session created successfully.');
    });
}

exports.getSession = function (req, res) {
    Session.findById(req.params.id, function (err, session) {
        if (err) {
            return next(err);
        }

        res.send(session);
    });
}

exports.updateSession = function (req, res) {
    Session.findByIdAndUpdate(req.params.id, { $set: req.body },
        function (err, session) {
            if (err) {
                return next(err);
            }

            res.send('Session updated.');
        });
}

exports.deleteSession = function (req, res) {
    Session.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }

        res.send('Deleted successfully.');
    })
}
