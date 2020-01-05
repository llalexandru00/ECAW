//https://www.youtube.com/watch?v=vjf774RKrLc
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Router/routes");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

//connect to database
mongoose.connect(process.env.DATABASE_CONN,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

// listen to server
app.listen(3000);