const express = require("express");
const empRoute = require("./routes/empRoute.js");
const errorControler = require("./controllers/errController.js");
const app = new express();
const cors =require("cors");

//enabling cors using package
app.use(cors());

//body parser for post-method
app.use(express.json());

//mounting the routes for employee
app.use("/", empRoute);

//for error handling
app.use(errorControler);


module.exports = app;