const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

app.use("/api/v1/tasks", tasks);
const port = 3000;
app.listen(port, console.log("Server started on port", port));
