const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    client_email: {
        required: true,
        type: String,
        default: 'Piedecuesta'
    },
    driver_email: {
        required: true,
        type: String,
        default: 'Piedecuesta'
    },
    origin: {
        required: true,
        type: String,
        default: 'Piedecuesta'
    },
    destination: {
        required: true,
        type: String,
        default: 'Bucaramanga'
    },
    status: {
        type: String,
        default: 'Pending'
    }
})

module.exports = mongoose.model('Ride', rideSchema)