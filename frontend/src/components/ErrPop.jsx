import React from 'react';
import { makeStyles } from "@material-ui/core";

const classes = makeStyles({
    divWraper: {
        position: "absolute",
        backgroundColor: "#f6958e",
        padding: "0px 12px",
        borderRadius: "8px",
        color: "#b12b2b",
        fontSize: "18px",
        fontWeight: "600",
        top: "80px",
        left: "560px",
        fontFamily: "Red Hat Display, sans-serif",

        '& > *' : {

        }
    }
});


export default function ErrPop(props){

    const clss = classes();

    if(props.trigger.length > 0){
        
        var count = 0;

        const clearIt = setInterval(() => {
           count = count + 1;
           if(count === 5){
             clearInterval(clearIt);
             props.setTrigger(false);
          }
         
          
        }, 1000);

        
        var someClass = clss.divWraper
       
    }
    
    return (props.trigger) ? (<>
                                <div className={someClass}>
                                   <p>{props.trigger}</p>
                                </div>
                             </>) : ""
}