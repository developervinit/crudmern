import React, { useState, useEffect } from 'react';
import { getEditUser, updateUser } from "../service/api.js"
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Select, MenuItem } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';


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
    color: "#6a6264"
  }
});

//this component to edit perticular user's data
export default function EditUser({match}){

  const nextPage = useHistory(); 
  const stylClass = stylClasses();
  const { id } = useParams();
  
  const [ stuObj, setStuObj ] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    Phone: ""
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
             <h1 className={stylClass.head}>Edit Employee Details</h1>
             
             <FormGroup  className={stylClass.formG}>
               <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input
                      
                      onChange={getValue} 
                      name="name"
                      value={stuObj.name}
                 />
               </FormControl>
               <FormControl>
                 <InputLabel>Designation</InputLabel>
                 <Input
                      
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
                      
                      onChange={getValue} 
                      name="email"
                      value={stuObj.email}
                 />
               </FormControl>
               <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input
                      onChange={getValue} 
                      name="Phone"
                      value={stuObj.Phone}
                 />
               </FormControl>
               <Button type="submit" onClick={submitData} className={stylClass.btn}>Edit</Button>
             </FormGroup>
          </>)
}