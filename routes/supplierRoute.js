//import express framework
const express = require('express');

//import other related model files
const supplierController = require('../controllers/supplierController');


const router = express.Router();

router
    .route('/')
    .post(supplierController.createSupplier)
    .get(supplierController.getAllSuppliers);

router
    .route('/:id')
    .get(supplierController.getSupplier)
    .patch(supplierController.updateSupplier)
    .delete(supplierController.deleteSupplier);

router
    .route('/email')
    .post(supplierController.sendEmail);

    
module.exports = router;