const mongoose = require("mongoose");

const TestSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Test", TestSchema);