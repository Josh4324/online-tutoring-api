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

exports.getTutorById = (req, res, next) => {
    const _id = req.params.id;
    User.find({_id}).then((tutor) => {
        if (tutor) {
            return res.status(200).send({
                status: true,
                data: tutor
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

