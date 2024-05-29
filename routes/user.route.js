let express = require("express");
const { userController } = require("../controller");
let route = express.Router();

route.post("/register", userController.register);
route.get("/get", userController.getAllusers);
route.delete("/delete/:id", userController.deleteUser);
route.put("/update/:id", userController.updateUser);

module.exports = route;
