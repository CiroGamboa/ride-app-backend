const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Admin', adminSchema)