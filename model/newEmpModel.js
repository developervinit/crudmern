const mongoose = require("mongoose");


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


const Employee = mongoose.model("Employee", empSchema);



module.exports = Employee;