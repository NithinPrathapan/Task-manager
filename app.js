const express = require("express");
const app = express();
const connectDb = require("./db/connect");
require("dotenv").config();
app.use(express.json());
const tasks = require("./routes/tasks");

app.use("/api/v1/tasks", tasks);
const port = 3000;
const start = async () => {
  await connectDb(process.env.MONGO_URL).then(() => {
    app.listen(port, console.log("Server started on port", port));
  });
};

start();
