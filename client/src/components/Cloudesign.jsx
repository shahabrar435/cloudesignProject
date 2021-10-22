import Banner from "../Assets/Images/web.png";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    background: "#000000",
  },
  image: {
    width: "100%",
    height: 652,
    objectFit: "cover",
    marginTop: 1,
  },
});

const ClouDesign = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <img className={classes.image} src={Banner} />
      </Box>
    </Box>
  );
};

export default ClouDesign;
