const config = require("../config/dev");
const mongoose = require("mongoose");

 async function connectToDB() {
  try {
   await mongoose.connect(config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectToDB };