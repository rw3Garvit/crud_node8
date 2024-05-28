let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");

routes.use("/user", userRoute);

module.exports = routes;
