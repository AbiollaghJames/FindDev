const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const JSONC = require("jsonc");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

// Files imports
const Dev = require("./models/devs");

// mongooseDB Connection
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("DB Connection established!");
    })
    .catch((err) => {
        console.log(`Error connecting to DB ${err}`);
    });

// routes
app.get('/', async (req, res) => {
    try {
        const devs = await Dev.find();
        const stringifiedDevs = JSON.stringify(devs, null, 2);
        res.render("home", { title: "home", stringifiedDevs });
    } catch (err) {
        console.error(`Error fetching data ${err}`);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

app.get('/documentation', (req, res) => {
    res.render('document', {title: 'document'});
});

app.post("/addDev", async (req, res) => {
    try {
        const newDev = new Dev(req.body);
        await newDev.save();
        res.status(201).json({message: "Dev added Successfully!"});
    } catch (err) {
        console.error(`Error adding Dev ${err}`);
        res.status(500).send("Internal Server Error")
    }
});




app.listen(port, host, () => {
    console.log(`Server running on port ${port} and host ${host}`);
});

