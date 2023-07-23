const getAllTasks = (req, res) => {
  res.send("All Items");
};
const getTask = (req, res) => {
  res.send("get item");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const createTask = (req, res) => {
  res.send("create task");
};
const deleteTask = (req, res) => {
  res.send("delete tasks");
};
module.exports = { getAllTasks, getTask, deleteTask, updateTask, createTask };
