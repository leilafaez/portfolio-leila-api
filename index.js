
const express = require ("express");
const server = express();
const bodyParser= require("body-parser")


async function runServer(){
    await require("./db").connectToDB();

    server.use(bodyParser.json());
    server.use("/api/v1/portfolios", require("./routes/portfolios"));

    server.get("/test",(req,res)=>{
      res.json({message : "hello world"});
    });

    server.get("", (req, res) => {
       res.json({ message: "Welcome in Portfolio Api Application!" });
     });

    const PORT = parseInt(process.env.PORT,10 ) || 3001;
    server.listen(PORT, (err) => {
      if (err) console.error(err);
      console.log("Server ready on port :", PORT);
    });
}

runServer();
