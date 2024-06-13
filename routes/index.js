let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let productRoute = require("./product.route");
let orderRoute = require("./order.route");
const { isLogin } = require("../middleware/auth");

routes.use("/user", userRoute);
routes.use("/product", productRoute);
routes.use("/order", isLogin, orderRoute);

module.exports = routes;
