import React, { useEffect, useState } from 'react';
import getUsers from "../service/api.js";
import { makeStyles, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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

})


export default function AllUser(){

    const [ users, setUsers ] = useState([]);

    const classes = classStyl();

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

     return(<>
              <h1 className={classes.forH1}>List of Employees</h1>
              
                 <Table  className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow className={classes.headRW}>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Designation(g)</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow className={classes.tbleBdRw} key={user.id}>
                          <TableCell component="th" scope="row">
                          {user.id}
                          </TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.designation}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.Phone}</TableCell>
                       </TableRow>
                       ))}
                   </TableBody>
                  </Table>
           </>)
}