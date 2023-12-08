const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('views'));

const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';
const urlDB = "mongodb+srv://finddevgroup:VsGIjoSF5lNGEQL5@finddev.skpihhy.mongodb.net/developersDB?retryWrites=true&w=majority"

//Sample Database for testing
const dev = {
    "name": "Abiolla",
    "email": "abiojame@protonmail.com",
    "loation": "Nairobi, Kenya",
    "tech_stack": ['NodeJS', 'Flask', 'MongoDB', 'MySQL'],
    "social_media": {
        github: "link here",
        linkedin: "link here",
        twitter: "link here",
    },
    "projects": {
        title: "FindDev",
        description: "API that connects Devs",
        url: "link here",
    },
}

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
    res.render('home', { title: 'home', dev });
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

app.get('/document', (req, res) => {
    res.render('document', {title: 'document'});
});


app.listen(port, host, () => {
    console.log(`Server running on port ${port} and host ${host}`);
});

