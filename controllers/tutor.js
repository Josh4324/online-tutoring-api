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
    const filter = {
        role: "Tutor",
        _id
    };
    User.find(filter).then((tutor) => {
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

exports.deactivateTutorById = (req, res, next) => {
    const _id = req.params.id;
    const filter = {
        role: "Tutor",
        _id
    };
    User.findOneAndDelete(filter).then((tutor) => {
        console.log(tutor);
        if (tutor) {
            return res.status(200).send({
                status: true,
                message: "Tutor was deactivated successfully",
                name: tutor.name
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

