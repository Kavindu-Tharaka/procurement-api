const Material = require('../models/StoreKeeper');

exports.createMaterial = async (req, res) => {
    try {
        const newMaterial = await Material.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                order: newMaterial,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllMaterials = async (req, res) => {
    try {
        const query = Material.find(req.query);

        const materials = await query;

        res.status(200).json({
            status: 'success',
            results: materials.length,
            data: {
                materials,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getMaterial = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                material,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateMaterial = async (req, res) => {
    // let obj = {
    //     materialInputFields: [ { material: 'test', quantity: '45', used: 05, total: 0 } ],
    //     refNo: 'Te23',
    //     date: '2020-10-31'

    //   }
    // let obj ={
    //     "$set":{ "materialInputFields": req.body.arr[0]}
    // }

    try {
        const material = await Material.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        // console.log("materials: ",material);
        res.status(200).json({
            status: 'success',
            data: {
                material,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        await Material.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

