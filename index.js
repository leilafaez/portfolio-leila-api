
const express = require("express");
const server = express();
const config = require("./config/dev")

const mongoose = require("mongoose");
async function connectToDB() {
  try {
    await mongoose.connect(
      config.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to DB!");
  } catch (err) {
    console.error(err);
  }
}

connectToDB();

server.use("/api/v1", require("./routes/portfolio"));

const PORT=parseInt (process.env.PORT || 3001);
server.listen(PORT,(err)=>{
if(err) console.error(err);
console.log("Server ready on port :" ,PORT);
})