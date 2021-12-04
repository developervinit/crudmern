import React, { useEffect, useState } from 'react';
import { getUsers, deleteOneUser } from "../service/api.js";
import { Link } from 'react-router-dom';
import { makeStyles, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

const classStyl = makeStyles({
    forH1:{
        marginTop: "100px",
        fontFamily: "Red Hat Display, sans-serif",
        color: "#6a6264"
    },
    table: {
        minWidth: 650,
        boxShadow: "0px 0px 6px 1px #dddddd"
    },
    headRW: {
        '& > *': {
            textAlign: 'left',
            fontSize: "16px",
            backgroundColor: "#f7e4e9",
            color: "#7f7175",
            fontWeight: "600"
        }
    },
    tbleBdRw: {
        '& > *': {
            textAlign: 'left',
            fontSize: "14px",
            color: "#7c7376"
            
        }
    },
    messg: {
        color: "dimgrey",
        margin: "22px",
        fontFamily: "Red Hat Display, sans-serif",
    }

})

//this component to show all-user data
export default function AllUser(){

    const [ users, setUsers ] = useState([]);
    const classes = classStyl();

    //fetching all-employees data from the database
    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }
    
    useEffect(() => {
        getAllUsers();
    }, []);

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
    

     return(<>
              <h1 className={classes.forH1}></h1>
                 <Table  className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow className={classes.headRW}>
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
                        <TableRow id={user.id} className={classes.tbleBdRw} key={user.id}>
                          <TableCell component="th" scope="row">
                          {user.id}
                          </TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.designation}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.Phone}</TableCell>
                          <TableCell>
                               <Button component={Link} to={`/edit/${user.id}`}>Edit</Button>
                               <Button onClick={() => deleteUser(user.id)} >Delete</Button>
                          </TableCell>
                       </TableRow>
                       )) : <h2 className={classes.messg}>There is NO Employee List to Show</h2>
                      }
                   </TableBody>
                  </Table>
              

              </>)
}