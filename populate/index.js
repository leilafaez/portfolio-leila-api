const config = require("../config/dev");
const mongoose = require("mongoose");
const fakeDB = require("./FakeDB");

async function connectToDB() {
  try {
    await mongoose.connect(config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB!");
    console.log("> Start populating DB...");
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log("> DB has been populated...");
  } catch (err) {
    console.error(err);
  }
}

connectToDB();
