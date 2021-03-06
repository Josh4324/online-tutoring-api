const jwt = require("jsonwebtoken");


exports.authentication = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const role = decodedToken.role;
        if (!role) {
            return res.status(401).json({
                error: "UnAuthorized",
                status: "error"
            });
        } else {
            next()
        }
    } catch {
        res.status(401).json({
            error: "Unauthorized",
            status: "error"
        })
    }
}

exports.adminAuthorization = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const role = decodedToken.role;
        if (role !== "Admin") {

            return res.status(403).json({
                error: "You do not have permission to visit this route",
                status: "error"
            });
        } else {
            next()
        }
    } catch {
        res.status(403).json({
            error: "You do not have permission to visit this route",
            status: "error"
        })
    }
}

exports.tutorAuthorization = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const role = decodedToken.role;
        if (role !== "Admin" && role !== "Tutor") {

            return res.status(403).json({
                error: "You do not have permission to visit this route",
                status: "error"
            });
        } else {
            next()
        }
    } catch {
        res.status(403).json({
            error: "You do not have permission to visit this route",
            status: "error"
        })
    }
}

exports.adminAndSudentAuthorization = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const role = decodedToken.role;
        if (role !== "Admin" && role !== "Student") {
            console.log("error")
            return res.status(403).json({
                error: "You do not have permission to visit this route",
                status: "error"
            });
        } else {
            next()
        }
    } catch {
        res.status(403).json({
            error: "You do not have permission to visit this route",
            status: "error"
        })
    }
}