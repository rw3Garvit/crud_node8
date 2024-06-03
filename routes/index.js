let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let productRoute = require("./product.route");
let orderRoute = require("./order.route");

routes.use("/user", userRoute);
routes.use("/product", productRoute);
routes.use("/order", orderRoute);

module.exports = routes;
