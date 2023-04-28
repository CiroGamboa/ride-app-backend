const express = require('express');
const clientModel = require('../models/clientModel');

const clientRouter = express.Router();
const sufix = "/client"

//Get all Clients
clientRouter.get(sufix + '/getAll', async (req, res) => {
    try {
        const data = await clientModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get single Client by ID
clientRouter.get(sufix + '/getOne/:id', async (req, res) => {
    try {
        const data = await clientModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Create Client
clientRouter.post(sufix + '/create', async (req, res) => {
    const data = new clientModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
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
clientRouter.patch(sufix + '/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await clientModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
clientRouter.delete(sufix + '/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await clientModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = clientRouter;