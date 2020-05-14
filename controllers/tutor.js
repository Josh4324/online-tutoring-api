const User = require("../models/user");

exports.getAllTutors = (req, res, next) => {
    const filter = {
        role: "Tutor"
    };
    User.find(filter).then((tutors) => {
        if (tutors) {
            return res.status(200).send({
                status: true,
                data: tutors
            });
        }
    }).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    )
}

