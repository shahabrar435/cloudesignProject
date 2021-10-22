import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    background: "#6a0dad",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
  button: {
    background: "#FFFFFF",
    color: "#6a0dad",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 20px",
    boxShadow: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact>
          CLOUDESIGN
        </NavLink>
        <Link to="all" className={classes.tabs}>
          <Button variant="contained" className={classes.button}>
            TODO
          </Button>
        </Link>
        <Link to="add" className={classes.tabs}>
          <Button variant="contained" className={classes.button}>
            Add TODO
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
