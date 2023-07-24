const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDb = require("./db/connect");
require("dotenv").config();

app.use("/api/v1/tasks", tasks);
const port = 3000;
const start = async () => {
  await connectDb(process.env.MONGO_URL).then(() => {
    app.listen(port, console.log("Server started on port", port));
  });
};

start();
