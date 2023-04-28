const express = require('express');
const adminModel = require('../models/adminModel');

const adminRouter = express.Router();
const sufix = "/admin"

//Get all
adminRouter.get(sufix + '/getAll', async (req, res) => {
    try {
        const data = await adminModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID
adminRouter.get(sufix + '/getOne/:id', async (req, res) => {
    try {
        const data = await adminModel.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Create
adminRouter.post(sufix + '/create', async (req, res) => {
    const data = new adminModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
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
adminRouter.patch(sufix + '/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await adminModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
adminRouter.delete(sufix + '/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await adminModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = adminRouter;