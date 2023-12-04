// Main file
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const urlDB = "mongodb+srv://finddevgroup:VsGIjoSF5lNGEQL5@finddev.skpihhy.mongodb.net/developersDB?retryWrites=true&w=majority"

// connect to database
mongoose.connect(urlDB)
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err);
});

// routes
app.get('/', (req, res) => {
    res.status(200).send('Thank you for your request, here is my response.');
});

app.get('/about', (req, res) => {
    res.status(200).send('Thank you for requesting about page, here is my response.');
});

app.get('/contact', (req, res) => {
    res.status(200).send('Thank you for requesting contact page, here is my response.');
});
// lister

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server running");
});










// imports

// Middlewares

// Database connection

// Routes
