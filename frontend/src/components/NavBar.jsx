import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#cdeea7",
    color: "white"
  },

  menus: {
    textDecoration: "none",
    color: "#313131",
    marginRight: "12px",
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    fontSize: "16px"
  }
});


export default function NavBar(){

  const classes = useStyle();


  return(<>
            <AppBar className={classes.header}>
              <Toolbar>
                <NavLink className={classes.menus} to="/" exact>Home</NavLink>
                <NavLink className={classes.menus} to="/newuser" exact>New User</NavLink>
                <NavLink className={classes.menus} to="/users" exact>Users</NavLink>
              </Toolbar>
            </AppBar>

         </>)
}