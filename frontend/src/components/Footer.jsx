import React from 'react';
import { makeStyles } from "@material-ui/core";

const classes = makeStyles({
    footContainer: {
        fontSize: "14px",
        marginTop: "20px",
        textAlign: "center",
        fontFamily: "Red Hat Display, sans-serif",
        minWidth: "300px",
        maxWidth: "560px",
        color: "#c7a3a9",
        margin: "auto",
        marginTop: "20px"
    },
    pStyle: {
       margin: "0"
    },
    titleStyle: {
        color: "#91555e"
    }
})

export default function Footer() {

    const clss = classes();

    return(<>
             <div className={clss.footContainer}>
                <p>This app <span className={clss.titleStyle}>crudmern</span> is developed & designed by <span className={clss.titleStyle}>dev.Vinit</span></p>
             </div>  
           </>)  
}