const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    clubName: {
        type: String,
        required: true
    },
    clubPresident: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    members: [{
        type: String,
        required: true
    }],
    faculty: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    }
});

const Club = new mongoose.model("Club", clubSchema);

module.exports = Club;