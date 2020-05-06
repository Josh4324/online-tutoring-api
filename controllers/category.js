const Category = require("../models/category");

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
        }
    })
    let category = new Category({
        name,
        description
    });
    return category.save()
        .then((category) => {
            console.log(result);
            res.status(201).send({
                status: true,
                message: "Category created successfully",
                name: category.name,
                id: category._id,
            })
        }).catch((err) => console.log(err));
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
    }).catch((err) => console.log(err));
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
    })
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
    }).catch((err) => console.log(err));
}