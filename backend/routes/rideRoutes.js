const express = require('express');
const rideModel = require('../models/rideModel');

const rideRouter = express.Router();
const sufix = "/ride"

//Get all 
rideRouter.get(sufix + '/getAll', async (req, res) => {
    try {
        const data = await rideModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID
rideRouter.get(sufix + '/getOne/:id', async (req, res) => {
    try {
        const data = await rideModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Create
rideRouter.post(sufix + '/create', async (req, res) => {
    const data = new rideModel({
        client_email: req.body.clientEmail,
        driver_email: req.body.driverEmail,
        origin: req.body.origin,
        destination: req.body.destination,
        status: req.body.status
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update by ID
rideRouter.patch(sufix + '/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await rideModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID 
rideRouter.delete(sufix + '/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await rideModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = rideRouter;