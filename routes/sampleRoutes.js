const express = require('express');
const tagController = require('../controllers/sampleController');

const router = express.Router();

router
	.route('/')
	.post(tagController.createTag)
	.get(tagController.getAllTags);

router
	.route('/:id')
	.get(tagController.getTag)
	.patch(tagController.updateTag)
	.delete(tagController.deleteTag);

module.exports = router;
