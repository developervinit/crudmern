import React from 'react';
import { Button } from '@material-ui/core';
import { notFndEmpclasses } from "../cssstyle/MuiStyle.js";


export default function NotFound(){

    const clss = notFndEmpclasses();

    return(<>
             <div className={clss.notFndEmp_Contnr}>
                <h1 className={clss.notFndEmp_Code}>ERROR 404</h1>
                <h1 className={clss.notFndEmp_Messg}>Oops we can't find that page!</h1>
                <Button className={clss.notFndEmp_Btn} variant="contained" href="/">Home</Button>
             </div> 
            </>)
}