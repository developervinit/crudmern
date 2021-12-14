import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const classes = makeStyles({
   container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "260px"
  },
   btn: {
      backgroundColor: "#a8d96f",
      color: "#4e850d",
      padding: "8px 24px",
      fontSize: "16px",
      fontFamily: "Red Hat Display, sans-serif",
      boxShadow: "0px 0px 6px 0px #c7c7c7",
      boxShadow: "1px 1px 1px 1px #81b841",
      fontWeight: "600"
   },
   hello: {
      fontFamily: "'Red Hat Display', sans-serif",
      color: "#91555e",
      fontSize: "54px",
      textShadow: "0px 0px 4px #b2b1b1"
  },
  HomePStyle: {
   color: "#c7a3a9",
   fontSize: "14px",
   marginTop: "60px",
   textAlign: "center",
   fontFamily: "Red Hat Display, sans-serif",
   minWidth: "300px",
   maxWidth: "560px"
  }
});


export default function Home() {

   const clss = classes();

    return(<>
            <div className={clss.container}>
               <h1 className={clss.hello}>Hello World</h1>
               <Button component={Link} to="/newuser" className={clss.btn}>Create New Employee</Button>
             </div>
             <p  className={clss.HomePStyle}>This crudmern app provides numberous functionalities such as create, delete, edit, and view employee's simple details with filter functionality according department field.</p> 
           </>)
}