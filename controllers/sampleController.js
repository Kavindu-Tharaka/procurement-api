const Tag = require('../models/Tag');

exports.createTag = async (req, res) => {
    try {
        const newTag = await Tag.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tag: newTag,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllTags = async (req, res) => {
    try {
        const query = Tag.find(req.query);

        const tags = await query;

        res.status(200).json({
            status: 'success',
            results: tags.length,
            data: {
                tags,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getTag = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                tag,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateTag = async (req, res) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                tag,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteTag = async (req, res) => {
    try {
        await Tag.findByIdAndDelete(req.params.id);

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
