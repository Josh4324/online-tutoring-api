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
            } else {
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
                    .then((user) => {
                        if (user) {
                            res.status(201).send({
                                status: true,
                                message: "User account successfully created",
                                id: user._id
                            })
                        }
                    })
            }
        })
        .catch(
            (error) => {
                res.status(500).json({
                    error: error
                });
            }
        )
};

exports.logIn = (req, res, next) => {
    const {
        email,
        password
    } = req.body
    User.findOne({
            email
        })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    status: false,
                    message: "User not found, please provide valid credentials"
                });
            }
            bcrypt.compare(password, user.password).then((valid) => {
                if (!valid) {
                    return res
                        .status(403).send({
                            status: false,
                            message: "Incorrect username or password, please review details and try again"
                        });
                }
                const token = jwt.sign({
                        email: user.email,
                        _id: user._id,
                        role: user.role
                    },
                    process.env.SECRET, {
                        expiresIn: "1hr"
                    }
                );
                res.status(200).send({
                    status: "success",
                    _id: user._id,
                    token,
                });
            });
        }).catch(
            (error) => {
                res.status(500).json({
                    error: error
                });
            }
        )
};