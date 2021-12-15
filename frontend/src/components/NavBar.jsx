import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { navEmpclasses } from "../cssstyle/MuiStyle.js";


export default function NavBar(){

  const location = useLocation();
  const clss = navEmpclasses();

  //getting current location
  const path = location.pathname;


var activeClassHome;
var activeClassCreate;
var activeClassAllEmp;

  if(path === "/"){
    activeClassHome = clss.navEmp_active;
    activeClassCreate = "";
    activeClassAllEmp = "";    
  } 
  else if(path === "/addemployee"){
    activeClassHome = "";
    activeClassCreate = clss.navEmp_active;;
    activeClassAllEmp = "";    
  }
  else if(path === "/allemployees"){
    activeClassHome = "";
    activeClassCreate = "";
    activeClassAllEmp = clss.navEmp_active;
  }

  return(<>
            <AppBar className={clss.navEmp_header}>
              <Toolbar>
                <NavLink className={clsx(clss.navEmp_menus, activeClassHome)} to="/" exact>HOME</NavLink>

                <NavLink className={clsx(clss.navEmp_menus, activeClassCreate)} to="/addemployee" exact>CREATE</NavLink> 

                <NavLink className={clsx(clss.navEmp_menus, activeClassAllEmp)} to="/allemployees" exact>EMPLOYEES</NavLink>
              </Toolbar>
            </AppBar>

         </>)
}