import React, { useState } from 'react';
import { addNewUser } from "../service/api.js"
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Select, MenuItem, TextField } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
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
  })

//material-ui opbjects for css-classes
const classes = makeStyles({
  head: {
    marginTop: "140px",
    fontFamily: "Red Hat Display, sans-serif",
    color: "#6a6264",
    width: "484px"
  },
  formG: {

  },
  btn: {
    backgroundColor: "#a8d96f",
    color: "#4e850d",
    padding: "8px 24px",
    fontSize: "16px",
    fontFamily: "Red Hat Display, sans-serif",
    boxShadow: "0px 0px 6px 0px #c7c7c7",
    boxShadow: "1px 1px 1px 1px #81b841",
    fontWeight: "600",
    marginBottom: "14px"
  },
  inputF: {

  },
  err: {
    color: "red",
    marginTop: "4px"
  }
})



//AddUser component
export default function AddUser(){

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  const nextPage = useHistory(); //this hook is to send user on next-page after form is submit.
  const back = useHistory();
  const clss = classes();

  
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
       await addNewUser(stuObj);
       alert("Form is Submited");
       nextPage.push("/users")
  }

  //to reset the form
  function formReset(){
    window.location.reload();
  }


  //Note - field 'id' is automatically handeled by 'json-server', we did not create it here.


  return(<>
             <h1 className={clss.head}>Add Employee</h1>

             {/**<Button onClick={goBackToPage}>GoBack</Button> **/}

             <FormGroup   className={clss.formG}>
               <FormControl>
                 <InputLabel>Name*</InputLabel>
                 <Input
                      autoFocus={true}
                      {...register("fullname")}

                      className={clss.inputF}
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

                      className={clss.inputF}
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

                        className={clss.inputF}
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

                      className={clss.inputF}
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

                      className={clss.inputF}
                      type="number"
                      onChange={getValue} 
                      value={stuObj.phone}
                 />
                 <p className={clss.err}>{errors.phone?.message}</p>
               </FormControl>

               <Button onClick={handleSubmit(formSubmit)}  className={clss.btn}>Add User</Button>
               <Button onClick={formReset} className={clss.btn}>Reset</Button>
            </FormGroup>
            
          </>)
}