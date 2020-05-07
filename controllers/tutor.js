const User = require("../models/user");
const Subject = require("../models/subject");

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

exports.makeTutorAdmin = (req, res, next) => {
    const _id = req.params.id;
    const filter = {
        role: "Tutor",
        _id
    };
    const update = {
        role: "Admin"
    };
    User.findOneAndUpdate(filter, update, {
        new: true
    }).then((tutor) => {
        if (tutor) {
            return res.status(201).send({
                status: true,
                message: "Tutor is now an Admin",
                id: tutor._id,
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

exports.takeSubjectInCategory = (req, res, next) => {
    const subject_id = req.params.subject_id;
    const _id = req.params.id;

    const filter = {
        _id: subject_id
    }
    const filter2 = {
        _id
    }
    const update = {
        tutors: _id
    };
    const update2 = {
        subjects: subject_id
    }
    Subject.findOneAndUpdate(filter, {
        $push: update
    }, {
        new: true
    }).then((subject) => {
        if (subject) {
            User.findOneAndUpdate(filter2, {
                $push: update2
            }, {
                new: true
            }).then((user) => {
                if (user) {
                    return res.status(201).send({
                        status: true,
                        message: "Subject registered successfully",
                        subject_name: subject.name,
                        tutor_name: user.name
                    });
                }
            })

        }
    }).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    )

}

exports.getSubjectRegistered = (req, res, next) => {
    const _id = req.params.id;
    const filter = {
        tutors: _id
    };
    Subject.find(filter).then((subjects) => {
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

exports.updateRegisteredSubject = (req, res, next) => {
    console.log("reg")
    const _id = req.params.id;
    const subject_id = req.params.subject_id;
    const {
        name,
        description
    } = req.body;
    const filter = {
        _id: subject_id
    }
    const update = {
        name,
        description
    };
    Subject.findOne(filter).then((subject) => {
        console.log(subject);
        if (subject.tutors.indexOf(_id) !== -1) {
            Subject.findOneAndUpdate(filter, update).then((subject) => {
                if (subject) {
                    return res.status(200).send({
                        status: true,
                        message: "Subject updated successfully",
                        name: subject.name,
                        category_id: subject.category,
                        id: subject._id,
                    });
                }
            })
        }
    }).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    )
}

exports.deleteRegisteredSubject = (req, res, next) => {
    const _id = req.params.id;
    const subject_id = req.params.subject_id;
    const filter = {
        _id: subject_id
    }
    Subject.findOne(filter).then((subject) => {
        if (subject.user.equals(_id)) {
            Subject.findOneAndDelete(filter).then((subject) => {
                if (subject) {
                    return res.status(200).send({
                        status: true,
                        message: "Subject deleted successfully",
                        name: subject.name,
                        category_id: subject.category,
                        id: subject._id,
                    });
                }
            })
        }
    }).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    )
}