import React from "react";
import { popUpEmpclasses } from "../cssstyle/MuiStyle.js";
import CloseIcon from '@material-ui/icons/Close';


export default function PopUp(props){

    const clss = popUpEmpclasses();
    
    function crossIt(){
        props.setTrigger(false);
    }

    const userData = props.userObj;
    const demoImage = "./dfimage.png";

    return (props.trigger) ? (<>
                                <div className={clss.popUpEmp_Cntnr}>
                                    <div className={clss.popUpEmp_CloseBtn} onClick={crossIt} ><CloseIcon /></div>
                                    <img className={clss.popUpEmp_Img} src={demoImage} alt="Employee" />
                                    <div className={clss.popUpEmp_EmpInfoWrpr}>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Name</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.fullname}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Designation</span>
                                        <div className={clss.popUpEmp_vlue}>{userData.designation}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Department</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.department}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Email</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.email}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Phone</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.phone}</div>
                                        </div>
                                    </div>
                                </div>  </>) : "";
}