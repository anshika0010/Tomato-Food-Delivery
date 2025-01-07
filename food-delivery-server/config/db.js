const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tomato-app:j6gp6oksz@tomato-app.m3fw1rm.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("Connected to DB");
    });
};

module.exports = connectDB;
