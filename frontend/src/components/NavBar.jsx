import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink, useLocation } from "react-router-dom";

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
  }
});


export default function NavBar(){

  const location = useLocation();
  const clss = classes();

  //getting current location
  const path = location.pathname;

  return(<>
            <AppBar className={clss.header}>
              <Toolbar>
                <NavLink className={clss.menus} to="/" exact>HOME</NavLink>
                { path==="/newuser" ? "" : <NavLink className={clss.menus} to="/newuser" exact>CREATE</NavLink>}
                <NavLink className={clss.menus} to="/users" exact>EMPLOYEES</NavLink>
              </Toolbar>
            </AppBar>

         </>)
}