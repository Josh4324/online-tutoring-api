const express = require('express');
require('dotenv').config()
const mongoose = require("mongoose");

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const searchRoutes = require('./routes/search');
const tutorRoutes = require('./routes/tutor');
const lessonRoutes = require('./routes/lesson');
const studentRoutes = require('./routes/student');

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/search', searchRoutes);
app.use('/api/v1/tutors', tutorRoutes);
app.use('/api/v1/lessons', lessonRoutes);
app.use('/api/v1/students', studentRoutes);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to my online tutoring api page</h1>");
});


//Handling unhandle routes
app.all("*", (req, res) => {
    return res.status(404).json({
        status: "Error 404",
        message: `Route not found. Can't find ${req.originalUrl} on this server`,
    });
});


mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose
    .connect(
        "mongodb+srv://josh:jesus000@cluster0-hziu4.mongodb.net/ota?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("Database connected");
        app.listen(port);
    })
    .catch((err) => console.log(err));

module.exports = app