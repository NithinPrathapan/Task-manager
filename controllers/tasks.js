const Task = require("../db/models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(201).json({ tasks: allTasks });
  } catch (error) {
    res.status(500).json(error);
  }
};
const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    res.status(200).json({ task: task });
    if (!task) {
      res.status(404).json(`error... no task on this id : ${id}`);
    }
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};
const updateTask = (req, res) => {
  res.send("update task");
};
const createTask = async (req, res) => {
  try {
    const { task, isCompleted } = req.body;
    const newTask = new Task({ task, isCompleted });
    const savedTask = await newTask.save();
    res.status(201).json({ success: true, task: savedTask });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const deleteTask = (req, res) => {
  res.send("delete tasks");
};
module.exports = { getAllTasks, getTask, deleteTask, updateTask, createTask };
