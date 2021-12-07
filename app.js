const express = require("express");
const empRoute = require("./routes/empRoute.js");
const app = new express();
const cors =require("cors");

app.use(cors());

//body parser for post-method
app.use(express.json());

//mounting the routes for employee
app.use("/", empRoute);


module.exports = app;