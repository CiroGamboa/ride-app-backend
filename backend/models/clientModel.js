const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
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
    gender: {
        type: String,
        required: true,
        default: "M"
    }
})

module.exports = mongoose.model('Client', clientSchema)