const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Student", "Tutor", "Admin"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    subjects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    }],
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema);