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
    
   
});

// Create the pastry model
module.exports = mongoose.model("Pastry", pastrySchema);


