import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
    color: "white"
  },

  menus: {
    textDecoration: "none",
    color: "white",
    marginRight: "12px",
  }
});


export default function NavBar(){

  const classes = useStyle();


  return(<>
            <AppBar className={classes.header}>
              <Toolbar>
                <NavLink className={classes.menus} to="./" exact>Home</NavLink>
                <NavLink className={classes.menus} to="users" exact>New-User</NavLink>
                <NavLink className={classes.menus} to="all" exact>All-Users</NavLink>
              </Toolbar>
            </AppBar>

         </>)
}