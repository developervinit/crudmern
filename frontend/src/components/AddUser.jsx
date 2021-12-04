import React, { useState } from 'react';
import { addNewUser } from "../service/api.js"
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Select, MenuItem } from "@material-ui/core";
import { useHistory } from 'react-router-dom'

//material-ui opbjects for css-classes
const stylClasses = makeStyles({
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
    color: "#837b7d",
    fontFamily: "Red Hat Display, sans-serif",
    boxShadow: "0px 0px 6px 0px #c7c7c7"
  }
})



//AddUser component
export default function AddUser(){

  const nextPage = useHistory(); //this hook is to send user on next-page after form is submit.
  const back = useHistory();
  const stylClass = stylClasses();
  const [ stuObj, setStuObj ] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    Phone: ""
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

  //Note - field 'id' is automatically handeled by 'json-server', we did not create it here.

  return(<>
             <h1 className={stylClass.head}>Add Employee</h1>
             <Button onClick={goBackToPage}>GoBack</Button>

             <FormGroup className={stylClass.formG}>
               <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input
                      required={true}
                      autoComplete="nope"
                      onChange={getValue} 
                      name="name"
                      value={stuObj.name}
                 />
               </FormControl>
               <FormControl>
                 <InputLabel>Designation</InputLabel>
                 <Input
                      required={true}
                      autoComplete="eope"
                      onChange={getValue} 
                      name="designation"
                      value={stuObj.designation}
                 />
               </FormControl>
               <FormControl>
                 <InputLabel>Department</InputLabel>
                 <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        
                        required={true}
                        onChange={getValue}
                        name="department"
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
               </FormControl>
               <FormControl>
                 <InputLabel>Email</InputLabel>
                 <Input
                      required={true}
                      autoComplete="gope"
                      onChange={getValue} 
                      name="email"
                      value={stuObj.email}
                 />
               </FormControl>
               <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input
                      required={true}
                      onChange={getValue} 
                      name="Phone"
                      value={stuObj.Phone}
                 />
               </FormControl>
               <Button type="submit" onClick={formSubmit} className={stylClass.btn}>Add User</Button>
            </FormGroup>
          </>)
}