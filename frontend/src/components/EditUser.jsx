import React, { useState, useEffect } from 'react';
import { getEditUser, updateUser } from "../service/api.js"
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Select, MenuItem } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



//schema for validadtion
const schema = yup.object().shape({
  fullname: yup.string().required(),
  designation: yup.string().required(),
  department: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(10).max(10).required()
});

const classes = makeStyles({
  head: {
    marginTop: "100px",
    fontFamily: "Red Hat Display, sans-serif",
    color: "#6a6264",
    width: "484px"
  },
  formG: {

  },
  btn: {
    marginTop: "32px",
    backgroundColor: "#cdeea7",
    fontSize: "16px",
    color: "#6a6264"
  },
  err: {
    color: "red",
    marginTop: "4px",
    marginBottom: "0px"
  }
});

//this component to edit perticular user's data
export default function EditUser(){

  

  const nextPage = useHistory(); 
  const clss = classes();
  const { id } = useParams();
  
  const [ stuObj, setStuObj ] = useState({
    fullname: "",
    designation: "",
    department: "",
    email: "",
    phone: ""
  });

  

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    getEditUserData();
  }, []);

  //fetching user-value according id, for pre filled fields.
  async function getEditUserData(){
    const userObj = await getEditUser(id);
    setStuObj(userObj.data);
}

  //to get value from input-field form
  const getValue = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setStuObj((preValue) => {
      return {
        ...preValue, [name]: value
      }
      
    });
  }

  //to submit user's data into database
  async function submitData(){
      await updateUser(id, stuObj); 
      alert("Form is Edited Succesfully");
      nextPage.push("/users") //redirecting to users-page
  }

  return(<>
             <h1 className={clss.head}>Edit Employee Details</h1>
             
             <FormGroup  className={clss.formG}>
               <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input
                      autoFocus={true}
                      {...register("fullname")}
                      onChange={getValue} 
                      
                      value={stuObj.fullname}
                 />
                 <p className={clss.err}>{errors.fullname?.message}</p>

               </FormControl>
               <FormControl>
                 <InputLabel>Designation</InputLabel>
                 <Input
                      {...register("designation")}
                      onChange={getValue} 
                      
                      value={stuObj.designation}
                 />
                 <p className={clss.err}>{errors.designation?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Department</InputLabel>
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
                 <InputLabel>Email</InputLabel>
                 <Input
                      {...register("email")}
                      onChange={getValue}

                      value={stuObj.email}
                 />
                  <p className={clss.err}>{errors.email?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input
                      {...register("phone")}
                      onChange={getValue}

                      value={stuObj.phone}
                 />
                 <p className={clss.err}>{errors.phone?.message}</p>
               </FormControl>
               <Button onClick={handleSubmit(submitData)} className={clss.btn}>Edit</Button>
             </FormGroup>
             
             
          </>)
}