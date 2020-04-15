const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    selectedOption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model("jobs", JobSchema);