import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { editTask, getTasks } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";

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

const EditTask = () => {
  const classes = useStyles();
  const [task, setTask] = useState(initialValues);
  const { title, description, mediaUrl, status } = task;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    loadTaskData();
  }, []);

  const loadTaskData = async () => {
    const response = await getTasks(id);
    setTask(response.data);
  };

  const onValueChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const editTaskDetails = async () => {
    await editTask(id, task);
    history.push("./all");
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Task</Typography>
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
        <InputLabel>Media</InputLabel>
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
        onClick={() => editTaskDetails()}
        variant="contained"
        color="primary"
      >
        Update Task
      </Button>
    </FormGroup>
  );
};

export default EditTask;
