const Lesson = require("../models/lesson");

exports.bookLesson = (req, res, next) => {
    let {
        name,
        description
    } = req.body;

    let lesson = new Lesson({
        name,
        description,
    })
    return lesson.save()
        .then((lesson) => {
            res.status(201).send({
                status: true,
                message: "Lesson created successfully",
                name: lesson.name,
                id: lesson._id,
            })
        })
}