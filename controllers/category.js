const Category = require("../models/category");

exports.addCategory = (req, res, next) => {
    const {name, description} = req.body
    Category.findOne({name}).then((category) => {
        if (category) {
            return res.status(423).send({
                status: false,
                message: "This category already exists",
            });
        }
    })
    let category = new Category ({
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