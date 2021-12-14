import React from "react";
import { makeStyles } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const classes = makeStyles({
    container: {
        top: "129px",
        padding: "10px",
        position: "fixed",
        minWidth: "300px",
        borderRadius: "8px",
        backgroundColor: "#e6bfbfcf",
        left: "0px",
        right: "0px",
        width: "300px",
        margin: "auto"
    },
    close: {
        top: "-24px",
        color: "#885757",
        right: "-24px",
        cursor: "pointer",
        display: "inline-block",
        position: "absolute",
        borderRadius: "10px",
        backgroundColor: "#f7b6b6",
        padding: "2px 4px",
        textAlign: "center"
    },
    image: {
        width: "302px",
        height: "238px"
    },
    cntntWrpr: {
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
    },
    labelValueWraper: {
        marginBottom: "12px",
        borderBottom: "1px solid #d19e9e"
    },
    label: {
        color: "#583c3c",
        fontSize: "14px",
    },
    vlaue: {
        color: "#583c3c",
        fontWeight: "600"
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
                                    <div className={clss.close} onClick={crossIt} ><CloseIcon /></div>
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