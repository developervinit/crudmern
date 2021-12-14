const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


//to connect 'config.env' file
dotenv.config({ path: './config.env'});

//db-string for database connection
const string = process.env.STRING;
const dbString = string.replace("<password>", process.env.PASSWORD);


//connecting database using mongoose method
mongoose.connect(dbString, {
                             useNewUrlParser: true,
                             useUnifiedTopology: true
                           }).then(() => console.log("database is connected"))
                           .catch(err => console.log('ERROR', err.message));


app.listen(8000, () => {
    console.log("Node server is istening on port 8000");
});
