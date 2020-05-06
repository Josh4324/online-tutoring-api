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

exports.getAllLessons = (req, res, next) => {
    const filter = {};
    Lesson.find(filter).then((lessons) => {
        if (lessons) {
            return res.status(200).send({
                status: true,
                data: lessons
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

exports.getLessonById = (req, res, next) => {
    const lesson_id = req.params.id;
    const filter = {
        _id: lesson_id
    };
    Lesson.findOne(filter).then((lesson) => {
        if (lesson) {
            return res.status(200).send({
                status: true,
                data:lesson
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