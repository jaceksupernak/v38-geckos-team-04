require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// import main route
const main = require('./routes/mainRoute');

// expose the express api into the app const
const app = express();

// read the PORT environment variable into port
const port = process.env.PORT;
const uri = process.env.DB_URI;

// parse application/json content-type
app.use(express.json());

// use the mainRoute
app.use("/", main);

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    // serverApi: ServerApiVersion.v1
}


// create server
app.listen(port, () => {
    console.log(`Visit http://localhost:${port}/ on a browser`);
    mongoose.connect(uri, options).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
});