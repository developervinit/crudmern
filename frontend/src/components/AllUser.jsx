import React, { useEffect, useState } from 'react';
import { getUsers, deleteOneUser, getEditUser } from "../service/api.js";
import { Link } from 'react-router-dom';
import { makeStyles, Table, TableHead, TableRow, TableCell, TableBody, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import PopUp from "./PopUp.jsx";

const classes = makeStyles({
    forH1:{
        marginTop: "100px",
        fontFamily: "Red Hat Display, sans-serif",
        color: "#6a6264"
    },
    formSelct:{
        display: "inline-block",
        verticalAlign: "baseline"
    },
    dashBoard: {
        backgroundColor: "#f7e4e9",
        padding: "18px",
        borderRadius: "8px",
    },
    strgthWrpr: {
        display: "inline-block",
        verticalAlign: "baseline",
        fontFamily: "Red Hat Display, sans-serif",

        fontSize: "22px",
        marginLeft: "40px",
        backgroundColor: "#f6d4dd",
        padding: "4px 12px",
        borderRadius: "13px",
        color: "#a45f71",
        fontWeight: "600"
    },
    totleLabel: {
        
    },
    totleVlue: {

    },
    table: {
        boxShadow: "0px 0px 6px 1px #dddddd"
    },
    headRW: {
        '& > *': {
            textAlign: 'left',
            fontSize: "20px",
            backgroundColor: "#f7e4e9",
            color: "#7f7175",
            fontWeight: "600"
        }
    },
    tbleBdRw: {
        '& > *': {
            textAlign: 'left',
            fontSize: "18px",
            color: "#7c7376"
            
        }
    },
    messg: {
        color: "dimgrey",
        margin: "22px",
        fontFamily: "Red Hat Display, sans-serif",
    },
    slctStyle: {
        width: "300px"
    },
    active: {
        display: "block"
    },
    deactive: {
        display: "none"
    }

})

//this component to show all-user data
export default function AllUser(){

    const [ users, setUsers ] = useState([]);
    const [ pop, setPop ] = useState(false);
    const [ slectValue, setSlectValue] = useState([]);
   
    const clss = classes();

    //fetching all-employees data from the database
    const getAllUsers = async (slectValue) => {
        const response = await getUsers(slectValue);
        setUsers(response.data);
    }
    
    useEffect(() => {
        getAllUsers(slectValue);
    }, [slectValue]);


    function getSlectVlue(e){
        let value = e.target.value;
        setSlectValue(value);
    }

    //to delete user with condition
    async function deleteUser(id){
        const delValue = prompt("Write 'DELETE' in capital to delete user");

        if(delValue !== "DELETE"){
            alert(`You did not Write 'DELETE'`);
        }  else {
            await deleteOneUser(id);
            getAllUsers();
        }       
        
    }

    
    
    async function popUp(id){
        const userData = await getEditUser(id);
        console.log(userData);
        //setBtnPop(true)
        setPop(userData.data);
    }

    

     return(<>
              <h1 className={clss.forH1}>Employees List</h1>
              <div className={clss.dashBoard}>
                 <FormControl  className={clss.formSelct}>
                    <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                    <Select
                        className={clss.slctStyle}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={getSlectVlue}
                        value={slectValue}
                         >
                           <MenuItem value="">All</MenuItem>
                           <MenuItem value="Accounts and Finance">Accounts and Finance</MenuItem>
                           <MenuItem value="HR">HR</MenuItem>
                           <MenuItem value="R & D">R & D</MenuItem>
                           <MenuItem value="Learning and development">Learning and development</MenuItem>
                           <MenuItem value="IT services">IT services</MenuItem>
                           <MenuItem value="Product development">Product development</MenuItem>
                           <MenuItem value="Admin department">Admin department</MenuItem>
                    </Select>
                  </FormControl >
                  <div className={clss.strgthWrpr}>
                        <span className={clss.totleLabel}>Total</span> : <span className={clss.totleVlue}>{users.length}</span>
                    </div>
                  </div>
              <div>
                 <Table  className={clss.table} aria-label="simple table">
                    <TableHead>
                      <TableRow className={clss.headRW}>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Designation</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.length !== 0 ? users.map((user) => (
                        <TableRow id={user.id} className={clss.tbleBdRw} key={user.id}>
                          <TableCell component="th" scope="row">
                          {user.id}
                          </TableCell>
                          <TableCell>{user.fullname}</TableCell>
                          <TableCell>{user.designation}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                               <Button component={Link} to={`/edit/${user.id}`}>Edit</Button>
                               <Button onClick={() => deleteUser(user.id)} >Delete</Button>
                               <Button onClick={() => popUp(user.id)} >View</Button>
                          </TableCell>
                       </TableRow>
                       )) : <h2 className={clss.messg}>There is NO Employee List to Show</h2>
                      }
                   </TableBody>
                  </Table>
                </div> 
                  <PopUp trigger={pop} setTrigger={setPop} userObj={pop} />
               </>)
}