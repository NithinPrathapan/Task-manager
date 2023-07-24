const mongoose = require("mongoose");
connectionString =
  "mongodb+srv://nithinvijayprathapan:nithin@cluster0.jy1jxlp.mongodb.net/TASK-MANAGER";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to db"))
  .catch((Err) => {
    console.log(Err);
  });
