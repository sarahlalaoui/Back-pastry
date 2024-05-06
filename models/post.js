// Import necessary modules
const mongoose = require('mongoose');


// Define the schema for the pastry model
const pastrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the pastry model
const Pastry = mongoose.model('Pastry', pastrySchema);

// Export the model for use in other files
module.exports = Pastry;
