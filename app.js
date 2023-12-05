// Main file
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();

// register view engine
app.set('view engine', 'ejs');

// db configs
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

// Middleware & static files
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('home', {title: 'home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

app.get('/document', (req, res) => {
    res.render('document', {title: 'document'});
});
// lister

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server running");
});

