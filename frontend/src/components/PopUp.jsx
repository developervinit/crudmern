import React from "react";
import { makeStyles } from "@material-ui/core";

const classes = makeStyles({
    container: {
        position: "fixed",
        top: "142px",
        left: "500px",
        minWidth: "300px",
        backgroundColor: "#f8d8d8cf",
        padding: "30px",
        borderRadius: "8px"
    },
    close: {
        position: "absolute",
        right: "12px",
        top: "10px",
        cursor: "pointer"
    },
    image: {
        width: "302px",
        height: "238px"
    },
    cntntWrpr: {
        fontSize: "20px",
        fontFamily: "Red Hat Display, sans-serif",
    },
    labelValueWraper: {
        marginBottom: "12px",
        borderBottom: "1px solid #bfafb0"
    },
    label: {
        fontSize: "16px",
        color: "#3b3b3b"
    },
    vlaue: {
        color: "#444444"
    }
});


export default function PopUp(props){

    const clss = classes();
    
    function crossIt(){
        props.setTrigger(false);
    }

    const userData = props.userObj;

   const demoImage = "./dfimage.png";

    return (props.trigger) ? (<>
                                <div className={clss.container}>
                                    <div className={clss.close} onClick={crossIt} >Close</div>
                                    <img className={clss.image} src={demoImage} alt="Default Image" />
                                    <div className={clss.cntntWrpr}>

                                        <div className={clss.labelValueWraper}>
                                        <span className={clss.label}>Name</span> 
                                        <div className={clss.vlaue}>{userData.fullname}</div>
                                        </div>

                                        <div className={clss.labelValueWraper}>
                                        <span className={clss.label}>Designation</span>
                                        <div className={clss.vlaue}>{userData.designation}</div>
                                        </div>

                                        <div className={clss.labelValueWraper}>
                                        <span className={clss.label}>Department</span> 
                                        <div className={clss.vlaue}>{userData.department}</div>
                                        </div>

                                        <div className={clss.labelValueWraper}>
                                        <span className={clss.label}>Email</span> 
                                        <div className={clss.vlaue}>{userData.email}</div>
                                        </div>

                                        <div className={clss.labelValueWraper}>
                                        <span className={clss.label}>Phone</span> 
                                        <div className={clss.vlaue}>{userData.phone}</div>
                                        </div>
                                    </div>
                                </div>  </>) : "";
}