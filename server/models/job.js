const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    mark_as_done: {
        type: Boolean,
        required: false,
        isChecked: true
    }
});

module.exports = mongoose.model("jobs", jobSchema);