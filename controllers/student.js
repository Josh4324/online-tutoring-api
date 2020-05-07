const User = require("../models/user");
const Subject = require("../models/subject");

exports.getAllTutorsSubject = (req, res, next) => {
    const subject_id = req.params.subject_id;
    const filter = {
        subjects: subject_id
    }

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