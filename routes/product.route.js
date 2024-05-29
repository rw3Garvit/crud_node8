let express = require("express");
const { productController } = require("../controller");
let route = express.Router();

route.post("/add", productController.addProduct);

module.exports = route;
