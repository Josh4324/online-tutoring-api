const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    tutors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    
})

module.exports = mongoose.model('Subject', subjectSchema);