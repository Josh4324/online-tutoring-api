const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

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
    created_on: {
        created: {
            type: Date,
            default: Date.now
        }
    }

})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);