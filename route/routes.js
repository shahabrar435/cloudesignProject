import express from "express";
import {
  getTasks,
  addTask,
  getTaskById,
  editTask,
  deleteTask,
} from "../Controller/task-controller.js";

const route = express.Router();

route.get("/", getTasks);
route.post("/add", addTask);
route.get("/:id", getTaskById);
route.put("/:id", editTask);
route.delete("/:id", deleteTask);

export default route;
