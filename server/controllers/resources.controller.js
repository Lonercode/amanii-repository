const Resource = require('../models/resources.model');

// GET all resources - paginated
const getResources =  async (req, res) => {
    try{
        const page = req.query.page || 1
        const limit = 5
        const entries = await Resource.find({
        }).skip((page - 1) * limit).limit(limit)
        const totalEntries = await Resource.countDocuments({})
    
        res.status(200).json({
            message: entries,
            totalPages: Math.ceil(totalEntries/limit),
            totalEntries
        })
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};

// Get all resources - all
const getAllResources = async (req, res) => {
    try {
        const entries = await Resource.find({})
        res.status(200).json({
            message: entries,
        })
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

// POST a new resource
const createResources = async (req, res) => {
    const resource = new Resource(req.body);
    try {
        const savedResource = await resource.save();
        res.status(201).json(savedResource);
    } catch (err) {
       
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: `Validation Error: ${err.message}` });
        }
        res.status(500).json({ message: 'Server error: Failed to create resource' });
    }
};


module.exports = {
    getResources,
    getAllResources,
    createResources
}