import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const classes = makeStyles({
  header: {
    background: "#cdeea7",
    color: "white",
    display: "flex",
    alignItems: "center"
  },

  menus: {
    textDecoration: "none",
    color: "#4e850d",
    marginRight: "12px",
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    fontSize: "18px",
    textDecoration: "none",
    background: "#a8d96f",
    padding: "6px 12px",
    borderRadius: "6px",
    boxShadow: "1px 1px 1px 1px #81b841"
  },
  active: {
    boxShadow: "1px 1px 6px 1px #263f09;"
  }
});


export default function NavBar(){

  const location = useLocation();
  const clss = classes();

  //getting current location
  const path = location.pathname;


var activeClassHome;
var activeClassCreate;
var activeClassAllEmp;

  if(path === "/"){
    activeClassHome = clss.active;
    activeClassCreate = "";
    activeClassAllEmp = "";    
  } 
  else if(path === "/newuser"){
    activeClassHome = "";
    activeClassCreate = clss.active;;
    activeClassAllEmp = "";    
  }
  else if(path === "/users"){
    activeClassHome = "";
    activeClassCreate = "";
    activeClassAllEmp = clss.active;
  }

  return(<>
            <AppBar className={clss.header}>
              <Toolbar>
                <NavLink className={clsx(clss.menus, activeClassHome)} to="/" exact>HOME</NavLink>

                <NavLink className={clsx(clss.menus, activeClassCreate)} to="/newuser" exact>CREATE</NavLink> 

                <NavLink className={clsx(clss.menus, activeClassAllEmp)} to="/users" exact>EMPLOYEES</NavLink>
              </Toolbar>
            </AppBar>

         </>)
}