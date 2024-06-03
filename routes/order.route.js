let express = require("express");
const { orderController } = require("../controller");

let route = express.Router();

route.post("/create-order", orderController.createOrder);
route.get("/get-order", orderController.getOrder);

module.exports = route;
