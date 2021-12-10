const mongoose = require("mongoose");
//it is to create id field which increments autometically
const autoIncrement = require("mongoose-auto-increment"); 


const empSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "An employee must have name"]
    },
    designation: {
        type: String,
        required: [true, "An employee must have designation"]
    },
    department: {
        type: String,
        required: [true, "An employee must be associated with designation"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "An employee must have email"]
    },
    phone: {
        type: Number,
        unique: true,
        required: [true, "An employee must have phone number"]
    }
});



//this to generate and increment id-field automaticaly.
//"initialize" is the method of "autoincrement" which to stablish connetion between "autoincrement" and "mongoose". and "mongoose.connection" brigns the string which we use to connect mongodb with our application.
autoIncrement.initialize(mongoose.connection);
empSchema.plugin(autoIncrement.plugin, "Employee"); //"empSchema" has "plugin" method which lets put model "Employee" into "autoIncrement.plugin"

//it was created for the testing purpose
// empSchema.pre("save", async function(next){
//     next();
// })

const Employee = mongoose.model("Employee", empSchema);



module.exports = Employee;