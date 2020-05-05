const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = (req, res, next) => {
    const {
        first_name,
        last_name,
        role,
        email,
        password
    } = req.body
    if (role === "Admin") {
        return res.status(422).send({
            status: false,
            message: "Role should be 'Student' or 'Tutor' ",
        });
    }
    User.findOne({
        email,
    }).then((user) => {
        if (user) {
            return res.status(423).send({
                status: false,
                message: "This email already exists",
            });
        }
    });
    bcrypt
        .hash(password, 12)
        .then((password) => {
            let user = new User({
                first_name,
                last_name,
                role,
                email,
                password,
            });
            return user.save();
        })
        .then(() =>
            User.findOne({
                email
            }).then((user) => {
                if (user) {
                    res.status(201).send({
                        status: true,
                        message: "User account successfully created",
                        id: user._id
                    })
                }
            })
        ).catch((err) => console.log(err));
};