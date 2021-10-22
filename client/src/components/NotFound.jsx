import notfound from "../Assets/Images/404-Not-Found.gif";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#6a0dad",
  },
});
const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.component}>
      <img
        src={notfound}
        style={{
          width: "57%",
          display: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default NotFound;
