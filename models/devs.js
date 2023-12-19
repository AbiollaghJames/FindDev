const mongoose = require("mongoose");

// const devSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // location: {
    //     type: String,
    //     required: true,
    // },
    // techStack: {
    //     type: [String],
    //     default: [],
    // },
    // social_media: {
    //     github: String,
    //     linked_in: String,
    //     twitter: String,
    // },
    // project: {
    //     title: String,
    //     description: String,
    //     url: String,
    // },

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: String,
    });
      
const devSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: String,
    techstack: { type: [String], default: [] },
    projects: [projectSchema],
    socialMedia: {
        github: String,
        linkedin: String,
        twitter: String,
    },
});

const Dev = mongoose.model("Dev", devSchema);
module.exports = Dev;