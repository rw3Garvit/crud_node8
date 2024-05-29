let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let productRoute = require("./product.route");

routes.use("/user", userRoute);
routes.use("/product", productRoute);

module.exports = routes;
