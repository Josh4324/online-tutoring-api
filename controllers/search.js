const Subject = require("../models/subject");
const User = require("../models/user");

exports.searchBySubjectName = (req, res, next) => {
    const query = req.query;
    Subject.find(
        query
    ).sort('name').then((subjects) => {
        if (subjects) {
            return res.status(200).send({
                status: true,
                data: subjects
            });
        }
    }).catch(
        (error) => {
            res.status(500).json({
                error
            });
        }
    )

}

exports.searchByTutorFirstName = (req, res, next) => {
    const first_name = req.query.first_name;
    const query = {role: "Tutor",first_name:first_name}
    User.find(
        query
    ).sort('first_name').then((subjects) => {
        if (subjects) {
            return res.status(200).send({
                status: true,
                data: subjects
            });
        }
    }).catch(
        (error) => {
            res.status(500).json({
                error
            });
        }
    )

}