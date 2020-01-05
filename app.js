const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Route/routes");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

//connect to database
mongoose.connect(process.env.DATABASE_CONN,
    {
        useNewUrlParser: true
    },
    () => {
        console.log("connected to database");
    });
// listen to server
app.listen(3000);