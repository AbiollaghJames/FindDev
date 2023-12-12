const mongoose = require("mongoose");

const devSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    techStack: {
        type: [String],
        default: [],
    },
    social_media: {
        github: String,
        linked_in: String,
        twitter: String,
    },
    project: {
        title: String,
        description: String,
        url: String,
    },
});

const Dev = mongoose.model("Dev", devSchema);
module.exports = Dev;