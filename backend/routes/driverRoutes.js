const express = require('express');
const driverModel = require('../models/driverModel');

const driverRouter = express.Router();
const sufix = "/driver"

//Get all Drivers
driverRouter.get(sufix + '/getAll', async (req, res) => {
    try {
        const data = await driverModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get single Driver by ID
driverRouter.get(sufix + '/getOne/:id', async (req, res) => {
    try {
        const data = await driverModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Create Driver
driverRouter.post(sufix + '/create', async (req, res) => {
    const data = new driverModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        plates: req.body.plates,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update by ID Method
driverRouter.patch(sufix + '/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await driverModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
driverRouter.delete(sufix + '/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await driverModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = driverRouter;