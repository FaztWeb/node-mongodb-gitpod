const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    description: String
});

module.exports = model('Task', TaskSchema);