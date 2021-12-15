import React, { useEffect, useState } from 'react';
import { getEmployeesFromApi, deleteOneEmployee, getEditEmployee } from "../service/api.js";
import { Link } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { allEmpclasses } from "../cssstyle/MuiStyle.js"; 
import PopUp from "./PopUp.jsx";


//this component to show all-user data
export default function AllEmployees(){

    const [ users, setUsers ] = useState([]);
    const [ pop, setPop ] = useState(false);
    const [ slectValue, setSlectValue] = useState([]);
   
    const clss = allEmpclasses();

    //fetching all-employees data from the database
    const getAllEmployees = async (slectValue) => {
        const response = await getEmployeesFromApi(slectValue);
        setUsers(response.data);
    }

    useEffect(() => {
        getAllEmployees(slectValue);
    }, [slectValue]);

    function getSlectVlue(e){
        let value = e.target.value;
        setSlectValue(value);
    }

    //to delete user with condition
    async function deleteUser(id){
        const delValue = prompt("Write 'DELETE' in capital to delete user");

        if(delValue !== "DELETE"){
            alert(`Oops You didn't Write 'DELETE'`);
        }  else {
            await deleteOneEmployee(id);
            getAllEmployees(slectValue);
        }       
        
    }
   
    async function popUp(id){
        const userData = await getEditEmployee(id);
        //setBtnPop(true)
        setPop(userData.data);
    }

     return(<>
              <div className={clss.allEmpContainer}>
                <h1 className={clss.allEmp_H1}>Employees List</h1>
                <div className={clss.allEmp_DashBoard}>
                 <FormControl  className={clss.allEmp_FilerFormSelct}>
                    <InputLabel className={clss.allEmp_InptLable} id="demo-simple-select-label">Select Department</InputLabel>
                    <Select
                        className={clss.allEmp_Selct}
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
                  <div className={clss.allEmp_TotalValueWrpr}>
                        <span className={clss.totleLabel}>Total</span> : <span className={clss.totleVlue}>{users.length}</span>
                    </div>
                  </div>
              <div className={clss.allEmp_TableContnr}>
                 <Table  className={clss.allEmp_Table} aria-label="simple table">
                    <TableHead>
                      <TableRow className={clss.allEmp_TableRow}>
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
                        <TableRow id={user.id} className={clss.allEmp_BodyTableRow} key={user._id}>
                          <TableCell component="th" scope="row">
                          {user._id}
                          </TableCell>
                          <TableCell>{user.fullname}</TableCell>
                          <TableCell>{user.designation}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                               <Button className={clss.allEmp_ViewBtn} onClick={() => popUp(user._id)} >View</Button>
                               <Button className={clss.allEmp_EdtBtn} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                               <Button className={clss.allEmp_DeltBtn} onClick={() => deleteUser(user._id)} >Delete</Button>
                               
                          </TableCell>
                       </TableRow>
                       )) : <h2 className={clss.allEmp_EmptyMsge}>There is no Employee to Show</h2>
                      }
                   </TableBody>
                  </Table>
                 </div> 
                   <PopUp trigger={pop} setTrigger={setPop} userObj={pop} />
                </div>  
               </>)
}
