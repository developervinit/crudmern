import React from 'react';
import { makeStyles, Button } from '@material-ui/core';


const stylist = makeStyles({
    messge: {
        marginTop: '200px'
    },
    code: {

    }

})


export default function NotFound(){

    const classes = stylist();

    return(<> 
              <h1 className={classes.code}>404</h1>
              <h1 className={classes.messge}>OOPS SORRY WE CANT FIND THAT PAGE!</h1>
              <h4>Either somthing went wrong or the page doesn't exist anymore</h4>
              <Button variant="contained" color="white" href="/">Home</Button>
           </>)
}