const { expressjwt: expressJwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const config = require("../config/dev")

//authentiction middleware
//this middleware will check access token in authorization header of a req
//it will verify access token against Auth0 JSON web key set
exports.checkJwt = expressJwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: "https://dev-fy2n2pbn1lv4tdoo.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://dev-fy2n2pbn1lv4tdoo.us.auth0.com/api/v2/",
  issuer: "https://dev-fy2n2pbn1lv4tdoo.us.auth0.com/",
  algorithms: ["RS256"],
});
 exports.checkRole =(role) => (req,res,next)=>{
  const user = req.user;
  if(user && user[config.AUTH0_NAMESPACE + "/roles"].includes(role)){
    next();
  }else{
    res.status(401).send("You are not authorized to access the resource!");

  }

 }
