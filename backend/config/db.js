const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = connectDB;
