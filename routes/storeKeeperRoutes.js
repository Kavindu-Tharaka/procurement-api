const express = require('express');
const storeController = require('../controllers/storeKeeperController');
const router = express.Router();

router
	.route('/')
	.post(storeController.createMaterial)
	.get(storeController.getAllMaterials)

router
	.route('/:id')
	.get(storeController.getMaterial)
	.patch(storeController.updateMaterial)
	.delete(storeController.deleteMaterial)

module.exports = router;