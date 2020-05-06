const Category = require("../models/category");
const Subject = require("../models/subject");

exports.addCategory = (req, res, next) => {
    const {
        name,
        description
    } = req.body
    Category.findOne({
        name
    }).then((category) => {
        if (category) {
            return res.status(423).send({
                status: false,
                message: "This category already exists",
            });
        } else {
            let category = new Category({
                name,
                description
            });
            return category.save()
                .then((category) => {
                    res.status(201).send({
                        status: true,
                        message: "Category created successfully",
                        name: category.name,
                        id: category._id,
                    })
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

exports.updateCategory = (req, res, next) => {
    const category_name = req.params.category_name;
    const {
        name,
        description
    } = req.body;
    const filter = {
        name: category_name
    };
    const update = {
        name,
        description
    };
    Category.findOneAndUpdate(filter, update, {
        new: true
    }).then((category) => {
        if (category) {
            return res.status(201).send({
                status: true,
                message: "Category was updated successfully",
                name: category.name,
                id: category._id,
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

exports.getAllCategories = (req, res, next) => {
    const filter = {};
    Category.find(filter).then((categories) => {
        if (categories) {
            return res.status(200).send({
                status: true,
                data: categories
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

exports.deleteCategory = (req, res, next) => {
    const category_name = req.params.category_name;
    const filter = {
        name: category_name
    };
    Category.findOneAndDelete(filter).then((category) => {
        if (category) {
            return res.status(200).send({
                status: true,
                message: "Category was deleted successfully",
                name: category.name
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

exports.addSubject = (req, res, next) => {
    const {
        category_name
    } = req.params
    let {
        name,
        description
    } = req.body;
    const filter = {
        name: category_name
    };

    Category.findOne(filter).then((category) => {
        if (category) {
            Subject.findOne({
                name
            }).then((subject) => {
                if (subject) {
                    if (category._id.equals(subject.category)) {
                        return res.status(423).send({
                            status: false,
                            message: "This subject already exists",
                        });
                    }
                } else {
                    let subject = new Subject({
                        name,
                        description,
                        category: category._id
                    })
                    return subject.save()
                        .then((subject) => {
                            res.status(201).send({
                                status: true,
                                message: "Subject created successfully",
                                name: subject.name,
                                category_id: subject.category,
                                id: subject._id,
                            })
                        })
                }
            })


        }
    })

}

exports.updateSubjectById = (req, res, next) => {
    const subject_id = req.params.id;
    const {
        name,
        description
    } = req.body;
    const filter = {
        _id: subject_id
    };
    const update = {
        name,
        description
    };
    Subject.findOneAndUpdate(filter, update, {
        new: true
    }).then((subject) => {
        if (subject) {
            return res.status(201).send({
                status: true,
                message: "Subject was updated successfully",
                name: subject.name,
                id: subject._id,
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

exports.deleteSubjectById = (req, res, next) => {
    const subject_id = req.params.id;
    const filter = {
        _id: subject_id
    };
    Subject.findOneAndDelete(filter).then((subject) => {
        if (subject) {
            return res.status(200).send({
                status: true,
                message: "Subject was deleted successfully",
                name: subject.name
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

exports.getSubjectByCategories = (req, res, next) => {
    const category_name = req.params.category_name;
    const filter = {
        name: category_name
    };
    Category.findOne(filter).then((category) => {
        Subject.find({category:category._id}).then((subjects)=> {
            if(subjects){
                return res.status(200).send({
                    status: true,
                    data: subjects
                });
            }
        })
    }).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    )

}