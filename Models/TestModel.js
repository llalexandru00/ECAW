const mongoose = require("mongoose");

const TestSchema = mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    age: {
        type: Number
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model("Test", TestSchema);