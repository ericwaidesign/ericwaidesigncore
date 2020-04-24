const Enrollee = require("./model");

/**
 * @description Create new Enrollees with the given array of data.
 */
exports.createEnrollees = function (req, res) {
    console.log("createEntrollees");

    let enrollees = req.body;

    for (enrolleeIndex in enrollees) {
        console.log(enrollees[enrolleeIndex]);
        let enrollee = new Enrollee(
            {
                userId: enrollees[enrolleeIndex].userId,
                firstName: enrollees[enrolleeIndex].firstName,
                lastName: enrollees[enrolleeIndex].lastName,
                version: enrollees[enrolleeIndex].version,
                insuranceCompany: enrollees[enrolleeIndex].insuranceCompany,
            }
        );

        Enrollee.findOne({
            userId: enrollee.userId,
            firstName: enrollee.firstName,
            lastName: enrollee.lastName,
            version: enrollee.version,
            insuranceCompany: enrollee.insuranceCompany,
        }, function(err, dup) {
            if (err) {
                console.log("createEnrollees: Error: " + err);
            } 

            if (dup) {
                console.log("createEnrollees: Duplicate: " + dup);
            } else {
                enrollee.save(function (err) {
                    if (err) {
                        console.log("createEnrollees: Error: " + err);
                    } 
                });
            }
        });
    }
}

/**
 * @description Return Enrolle by ID.
 */
exports.getEnrollee = function (req, res) {
    Enrollee.findById(req.params.id, function (err, enrollee) {
        if (err) {
            sendStatus(500);
        }
        res.send(enrollee);
    });
}

/**
 * @description Remove Enrollee by ID.
 */
exports.removeEnrollee = function (req, res) {
    Enrollee.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            sendStatus(500);
        }
        res.sendStatus(200);
    })
}

/**
 * @description Remove all Enrollees in the collection.
 */
exports.removeAllEnrollees = function (req, res) {
    Enrollee.remove({}, function (err) {
        if (err) {
            sendStatus(500);
        }
        res.sendStatus(200);
    })
}

/**
 * @description Return all Enrollees in the collection.
 */
exports.getAllEnrollees = function (req, res) {
    Enrollee.find({}, function (err, enrollees) {
        if (err) {
            return next(err);
        }
        res.send(enrollees);
    });
} 