import { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../Service/api";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#6a0dad",
      color: "#FFFFFF",
      fontSize: 20,
    },
  },
  row: {
    "& > *": {
      fontSize: 15,
    },
  },
  urlImage: {
    width: 150,
    height: 80,
    borderRadius: 20,
  },
});

const AllTasks = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  const formatDate = (date) => {
    return date < 10 ? "0" + date : date;
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const deleteTaskData = async (id) => {
    await deleteTask(id);
    getAllTasks();
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Media</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>DateTime</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow className={classes.row} key={task._id}>
            <TableCell>{task._id}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>
              <img
                className={classes.urlImage}
                src={task.mediaUrl}
                alt="image"
              />
            </TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell>
              {formatDate(new Date(task.createdAt).getDate())}/
              {formatDate(new Date(task.createdAt).getMonth())}/
              {formatDate(new Date(task.createdAt).getFullYear())}{" "}
              {formatDate(new Date(task.createdAt).getHours())}:
              {formatDate(new Date(task.createdAt).getMinutes())}
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/${task._id}`}
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteTaskData(task._id)}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllTasks;
