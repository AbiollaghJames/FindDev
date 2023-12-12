const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

// mongooseDB Connection
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("DB Connection established!");
    })
    .catch((err) => {
        console.log(`Error connecting to DB ${err}`);
    });

// //Sample Database for testing
// const dev = {
//     "name": "Abiolla",
//     "email": "abiojame@protonmail.com",
//     "location": "Nairobi, Kenya",
//     "tech_stack": ['NodeJS', 'Flask', 'MongoDB', 'MySQL'],
//     "social_media": {
//         github: "link here",
//         linkedin: "link here",
//         twitter: "link here",
//     },
//     "projects": {
//         title: "FindDev",
//         description: "API that connects Devs",
//         url: "link here",
//     },
// }

// // routes
// app.get('/', (req, res) => {
//     res.render('home', { title: 'home', dev });
// });

// app.get('/about', (req, res) => {
//     res.render('about', {title: 'about'});
// });

// app.get('/document', (req, res) => {
//     res.render('document', {title: 'document'});
// });

app.listen(port, host, () => {
    console.log(`Server running on port ${port} and host ${host}`);
});

