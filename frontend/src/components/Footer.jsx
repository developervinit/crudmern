//import { makeStyles } from '@material-ui/core';
import React from 'react';
import { footrEmpclasses } from "../cssstyle/MuiStyle.js";



export default function Footer() {

    const clss = footrEmpclasses();

    return(<>
             <div className={clss.footEmp_Contnr}>
                <p>This app <span className={clss.footEmp_Decoration}>crudmern</span> is developed & designed by <span className={clss.footEmp_Decoration}>dev.Vinit</span></p>
             </div>  
           </>)  
}