const express = require("express");
const empRoute = require("./routes/empRoute.js");
const errorControler = require("./controllers/errController.js");
const app = new express();
const cors =require("cors");

app.use(cors());

//body parser for post-method
app.use(express.json());

//mounting the routes for employee
app.use("/", empRoute);

//for erro handling
app.use(errorControler);


module.exports = app;