import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { addTask } from "../Service/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "auto",
    "& > *": {
      marginTop: 20,
    },
  },
});

const initialValues = {
  title: "",
  description: "",
  mediaUrl: "",
  status: "",
};

const AddTask = () => {
  const classes = useStyles();
  const [task, setTask] = useState(initialValues);
  const { title, description, mediaUrl, status } = task;
  const history = useHistory();

  const onValueChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTaskDetails = async () => {
    await addTask(task);
    history.push("./all");
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add Task</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" value={title} />
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="description"
          value={description}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Image URL</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="mediaUrl"
          value={mediaUrl}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="status"
          value={status}
        />
      </FormControl>
      <Button
        onClick={() => addTaskDetails()}
        variant="contained"
        color="primary"
      >
        Add Task
      </Button>
    </FormGroup>
  );
};

export default AddTask;
