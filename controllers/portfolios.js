const mongoose=require("mongoose");
const Portfolio=mongoose.model("Portfolio");

exports.getPortfolios = async (req, res) => {
  const portfolios =await Portfolio.find({});
  console.log("Fetched portfolios:", portfolios);
  return res.json(portfolios);
}