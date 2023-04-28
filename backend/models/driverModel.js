const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
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
    },
    plates: {
        type: String,
        unique: true,
        required: true    
    }
})

module.exports = mongoose.model('Driver', driverSchema)