const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, 
            required: true,
            enum: ['Hotlines', 'Counseling', 'Support Groups', 'Therapists', 'Self-Help Apps', 'Emergency Services'] 
    },
    link: { type: String, unique: true }
});

module.exports = mongoose.model('Resource', ResourceSchema);