const Subject = require("../models/subject");

exports.searchBySubjectName = (req, res, next) => {
    const query = req.query;
    console.log(query)
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
                error: error
            });
        }
    )

}