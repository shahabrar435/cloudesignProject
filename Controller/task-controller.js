import Task from "../model/task-schema.js";

export const getTasks = async (request, response) => {
  try {
    let task = await Task.find();
    response.json(task);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const addTask = async (request, response) => {
  const task = request.body;
  const newTask = new Task(task);

  try {
    await newTask.save();
    response.json(newTask);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const getTaskById = async (request, response) => {
  const id = request.params.id;
  try {
    const task = await Task.findById(id);
    response.json(task);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const editTask = async (request, response) => {
  const task = request.body;
  const editTask = new Task(task);
  try {
    const task = await Task.updateOne({ _id: request.params.id }, editTask);
    response.json(editTask);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const deleteTask = async (request, response) => {
  try {
    await Task.deleteOne({ _id: request.params.id });
    response.json("User Deleted Sucessfully");
  } catch (error) {
    response.json({ message: error.message });
  }
};
