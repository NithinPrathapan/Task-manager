const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("conncected to database...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
