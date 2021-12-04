import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const classes = makeStyles({
   container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "140px"
  },
   btn: {
      backgroundColor: "#cdeea7",
      color: "#837b7d",
      padding: "8px 24px",
      fontSize: "16px",
      fontFamily: "Red Hat Display, sans-serif",
      boxShadow: "0px 0px 6px 0px #c7c7c7"
   },
   hello: {
      fontFamily: "'Red Hat Display', sans-serif",
      color: "#313131",
      fontSize: "54px",
      textShadow: "0px 0px 4px #b2b1b1"
  }
});


export default function Home() {

   const clss = classes();

    return(<>
            <div className={clss.container}>
               <h1 className={clss.hello}>Hello World</h1>
               <Button component={Link} to="/newuser" className={clss.btn}>Create New Employee</Button>
             </div> 
           </>)
}