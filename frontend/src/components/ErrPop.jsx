import React from 'react';
import { errEmpclasses } from "../cssstyle/MuiStyle.js"; 

export default function ErrPop(props){

    const clss = errEmpclasses();

    if(props.trigger.length > 0){
        var count = 0;
        const clearIt = setInterval(() => {
           count = count + 1;
           if(count === 5){
             clearInterval(clearIt);
             props.setTrigger(false);
          }
        }, 1000);
        var someClass = clss.errPop_divWraper
      }
    
    return (props.trigger) ? (<>
                                <div className={someClass}>
                                    <p>{props.trigger}</p>
                                    </div>
                              </>) : ""
}