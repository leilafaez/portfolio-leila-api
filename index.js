

const express = require("express");
const server = express();


server.use("/api/v1", require("./routes/portfolio"));

const PORT=parseInt (process.env.PORT || 3001);
server.listen(PORT,(err)=>{
if(err) console.error(err);
console.log("Server ready on port :" ,PORT);
})