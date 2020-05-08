const mongoose = require('mongoose');
const Subject = require("../models/subject");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Category', categorySchema);