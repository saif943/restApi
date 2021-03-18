const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let result = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" DB concte");
  } catch (error) {
    console.log("error");
  }
};
module.exports = connectDB;
