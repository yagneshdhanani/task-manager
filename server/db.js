const mongoose = require("mongoose");

const CONNECTION_URI = process.env.CONNECTION_URI;

const connectToDb = () => {
  mongoose.connect(CONNECTION_URI, () => {
    console.log("Connected to database successfully!!!");
  });
};

module.exports = connectToDb;
