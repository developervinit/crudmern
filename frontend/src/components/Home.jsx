import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { homeEmpclasses } from "../cssstyle/MuiStyle.js"; 


export default function Home() {

   const clss = homeEmpclasses();

    return(<>
            <div className={clss.container}>
               <h1 className={clss.hello}>Hello World</h1>
               <Button component={Link} to="/Addemployee" className={clss.HomeBtnCreat}>Create New Employee</Button>
             </div>
             <p  className={clss.HomePStyle}>This crudmern app provides numberous functionalities such as create, delete, edit, and view employee's simple details with filter functionality according department field.</p> 
           </>)
}