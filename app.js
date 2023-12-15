// App modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const JSONC = require("jsonc");
require("dotenv").config();

// create express app instance
const app = express();

// Middlewares
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.json());

// Enviroment variables
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

// Add developer record to the database
app.post("/addDev", async (req, res) => {
    try {
        const newDev = new Dev(req.body);
        await newDev.save();
        res.status(201).json({ message: "Dev added successfully to the database!" });
    } catch (err) {
        console.error(`Error adding Dev ${err}`);
        console.error(`Raw Request Body: ${JSON.stringify(req.body)}`);
        res.status(500).send("Internal Server Error");
    }
});

// Get a developer by ID
app.get("/getDev/:id", async (req, res) => {
    try {
        const dev = await Dev.findById(req.params.id);
        res.json(dev);
    } catch (error) {
        console.error(`Error fetching Dev data: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a developer document from DB
app.delete("/deleteDev/:id", async (req, res) => {
    try {
        const devId = req.params.id;
        await Dev.deleteOne({ _id: devId });
        res.status(200).json({ message: "Dev deleted successfully!" });
    } catch (err) {
        console.error(`Error deleting Dev: ${err}`);
        res.status(500).send("Internal server error");
    }
});

app.listen(port, host, () => {
    console.log(`Server running on port ${port} and host ${host}`);
});

