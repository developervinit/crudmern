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

//to create newEmployee 
exports.addEmp = (req, res, next) => {

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

exports.deleteEmp = async (req, res) => {
    const id = req.params.id;
    try{
        const delRespns = await Employee.deleteOne({ _id: id });
        res.send(delRespns);
    }catch(err){
        res.send({ errorMessage: err.message })
    }
}