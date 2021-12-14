const Employee = require("../model/newEmpModel.js"); //importing model


//getting data from the mongodb-server and sending to the api.js file which is frontend folder of react.
exports.getEmp = async (req, res) => {

    try{
        const empDatafromMongo = await Employee.find();
        res.status(200).json(empDatafromMongo);
    }catch(err){
        res.status(404).json({
            Error: err.message
        })
    }
    
}

exports.getEmpByDepartment = async (req, res) => {
    const departmentName = req.params.departmant;
    
    try{
        const filteredData = await Employee.find({ department: departmentName});
        res.json(filteredData);
    }catch(err){
        res.json({
            errorMessage: err.message
        });
    }

}



//storing data into mongodb server
exports.addEmp = (req, res, next) => {

    //data-object is coming from "react-form" in 'req' object here, and we are taking it out using "req.body" and saving it into "empData" variable.
    const empData = req.body; //extracted employee-data from the body
    const newEmp = new Employee(empData); //put extracted data into the model of schema to get validated

    try{
         newEmp.save(function(err){
             if(err) {
                 return next(err);
                }else {
                    res.send("form is submited");
                }
        }); //save() is mongoose's document middleware which is async
        }catch(err){
           res.json({ errorMessage: err.message });
        }
}


// //storing data into mongodb server
// exports.addEmp = (req, res) => {

//     //data-object is coming from "react-form" in 'req' object here, and we are taking it out using "req.body" and saving it into "empData" variable.
//     const empData = req.body; //extracted employee-data from the body
//     const newEmp = new Employee(empData); //put extracted data into the model of schema to get validated

//     try{
//         newEmp.save((err) => {
//                         if(err){
                
//                        if(err.name === "MongoServerError" && err.code === 11000){

//                 return handleDuplicateError(err, res);

//                 // return  res.status(500).send({
//                 //         success: false,
//                 //         message: "this phone number already exist in database"
//                 //        });
//                 }
//             }
//         }); //save() is mongoose's document middleware which is async
//         res.json(newEmp); //it send back response to frontend, and then frontend know that form is submited
//     }catch(err){
//         res.json({ errorMessage: err.message });
//     }

// }

//temprary function running in addEmp() function
// function handleDuplicateError(err, res) {
//     const field = Object.keys(err.keyValue);
//     const code = 409;
//     res.status(code).send(`An account with that ${field} already exists.`); 
// }





//this route-handler is to get data by "id" from the mongodb database and send res back to the react app. "id" is coming from react app. this is running for the page where you edit employee's detail. 
exports.getEmpById = async (req, res) => {
    const id = req.params.id;

    try{
        const dataById = await Employee.findById(id);
        res.json(dataById);
    }catch(err){
        res.json({errorMessage: err.message})
    }
}



//updating employee data
exports.updateEmpData = async (req, res, next) => {
    const empData = req.body;
    const id = req.params.id;

    const updateEmpData  = new Employee(empData);
    try{
          await Employee.findByIdAndUpdate(id, updateEmpData);
          res.json(updateEmpData); //sending back response
    }catch(err){
          next(err) //if any error occurs including duplicate-field like email, phone then next() sends that error to the error middleware which is in file errController.js.
    }
    
}

//NOTE: in video it teach that to update perticular document use "updateOne()" method which not corrent because "updateOne()" method only update one-user it means if you try second user to update then it will not update.
//video link - https://www.youtube.com/watch?v=UTA2XWPj97Q



exports.deleteEmp = async (req, res) => {
    const id = req.params.id;
    try{
        const delRespns = await Employee.deleteOne({ _id: id });
        res.send(delRespns);
    }catch(err){
        res.send({ errorMessage: err.message })
    }
}