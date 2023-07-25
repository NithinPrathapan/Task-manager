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
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete({ _id: id });
    if (!task) {
      res.status(404).json("no such task were found on this id", id);
    } else {
      res.status(200).json({ deleted_item: task });
    }
  } catch (error) {
    res.status(504).json({ error });
  }
  res.send("delete tasks");
};
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `no task with id : ${id}` });
    }
    res.status(200).json({ success: true, task: task });
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = { getAllTasks, getTask, deleteTask, updateTask, createTask };
