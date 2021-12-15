import React, { useState } from 'react';
import { addNewEmployee } from "../service/api.js"
import { FormGroup, FormControl, Input, InputLabel, Button, Select, MenuItem } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrPop from "./ErrPop.jsx";
import { addEmpclasses } from "../cssstyle/MuiStyle.js"; 

//schema for validadtion for frontend using "useForm", "yup", "yupResolver".
const schema = yup.object().shape({
    fullname: yup.string().required(),
    designation: yup.string().required(),
    department: yup.string().required(),
    email: yup.string().email().strict().lowercase("email must be in lowercase").required(),
    phone: yup.string().min(10).max(10).required()
  });

    
//AddUser component
export default function AddEmployee(){

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  const nextPage = useHistory(); //this hook is to send user on next-page after form is submit.
  const back = useHistory();
  const clss = addEmpclasses();

  const [ mongoerr, setmongoErr ] = useState([]);
  const [ stuObj, setStuObj ] = useState({
    fullname: "",
    designation: "",
    department: "",
    email: "",
    phone: ""
  });

  function goBackToPage(){
    back.goBack();
  }

  //getting values from input-form
  const getValue = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setStuObj((preValue) => {
      return {
        ...preValue, [name]: value
      }
      
    });
  }

  //put data into data-base on invoking this function
  async function formSubmit(){
    try{
      
      //when form is submitted succesfuly then return status is 200
      //when duplicate email and phone-number error occurs then "addNewEmployee(stuObj)" returns status is 409
      const value = await addNewEmployee(stuObj);
      
      if(value.status === 200){  //when form submitted succesfuly
          alert("Form is Submited");
          nextPage.push("/Allemployees");
      }else {   //when duplicate email and/or phone-number error occurs
          const message = value.data.message;
          return setmongoErr(message);
      }
      
    }catch(err){
      console.log(err);
    }
       
  }

  //to reset the form
  function formReset(){
    window.location.reload();
  }

  return(<>
           <ErrPop trigger={mongoerr} setTrigger={setmongoErr} />
           <div className={clss.newEmpFormContainer}>
             <h1 className={clss.head}>Add Employee</h1>
             
             {/**<Button onClick={goBackToPage}>GoBack</Button> **/}

             <FormGroup>
               <FormControl>
                 <InputLabel>Name*</InputLabel>
                 <Input
                      autoFocus={true}
                      {...register("fullname")}

                      
                      onChange={getValue} 
                      error={false}
                      value={stuObj.fullname}
                      autoComplete="hshs"

                 />
                 <p className={clss.err}>{errors.fullname?.message}</p>
              </FormControl>

               <FormControl>
                 <InputLabel>Designation*</InputLabel>
                 <Input
                      {...register("designation")}

                      onChange={getValue} 
                      value={stuObj.designation}
                      autoComplete="hshs"
                 />
                 <p className={clss.err}>{errors.designation?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Department*</InputLabel>
                 <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        {...register("department")}

                        onChange={getValue}
                        value={stuObj.department}
                         >
                           <MenuItem value="Accounts and Finance">Accounts and Finance</MenuItem>
                           <MenuItem value="HR">HR</MenuItem>
                           <MenuItem value="R & D">R & D</MenuItem>
                           <MenuItem value="Learning and development">Learning and development</MenuItem>
                           <MenuItem value="IT services">IT services</MenuItem>
                           <MenuItem value="Product development">Product development</MenuItem>
                           <MenuItem value="Admin department">Admin department</MenuItem>
                  </Select>
                  <p className={clss.err}>{errors.department?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Email*</InputLabel>
                 <Input
                      {...register("email")}

                      onChange={getValue} 
                      value={stuObj.email}
                      autoComplete="hshs"
                 />
                 <p className={clss.err}>{errors.email?.message}</p>
                 
               </FormControl>

               <FormControl>
                 <InputLabel>Phone*</InputLabel>
                 <Input
                      {...register("phone")}

                      type="number"
                      onChange={getValue} 
                      value={stuObj.phone}
                 />
                 <p className={clss.err}>{errors.phone?.message}</p>
                 
               </FormControl>

               <Button onClick={handleSubmit(formSubmit)}  className={clss.AddEmpBtn}>Add User</Button>
               <Button onClick={formReset} className={clss.AddEmpBtn}>Reset</Button>
             </FormGroup>

            </div>  
          </>)
}