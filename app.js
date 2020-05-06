const express = require('express');
require('dotenv').config()
const mongoose = require("mongoose");

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/categories', categoryRoutes);


app.use((req, res) => {
    res.send("<h1>Welcome to my online tutoring api page</h1>");
});

mongoose.set('useCreateIndex', true);
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