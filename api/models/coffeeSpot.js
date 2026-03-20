const mongoose = require('mongoose');
// Define the schema
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
// Create a model from the schema
module.exports = mongoose.model('Task', TaskSchema);

// Put the same schema Ellen gave us for now, update later.