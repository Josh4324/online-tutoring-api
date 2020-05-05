const {
    body,
    validationResult
} = require('express-validator');

exports.signUpValidationRules = () => {
    return [
        // username must be an email
        body("first_name").notEmpty().isAlpha().trim().escape().withMessage("Name must not be empty"),
        body("last_name").notEmpty().isAlpha().trim().escape().withMessage("Name must not be empty"),
        body("role").notEmpty().isIn(["Student", "Tutor", "Admin"]).withMessage("Role should be 'Student' or 'Tutor' "),
        body("email").notEmpty().isEmail().normalizeEmail().withMessage("Email is required"),
        body("password").notEmpty().isLength({
            min: 5
        }).withMessage("Password must have at least 5 characters"),
    ]
}

exports.loginValidationRules = () => {
    return [
        
        body("email").notEmpty().isEmail().normalizeEmail().withMessage("Email is required"),
        body("password").notEmpty().withMessage("Password is Required")
    ]
}

exports.validate = (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({
            [err.param]: err.msg
        }))

        return res.status(422).json({
            errors: extractedErrors,
        })

    } catch {
        res.status(401).json({
            error: "Unauthorized",
            status: "error"
        })
    }
}