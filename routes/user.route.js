let express = require("express");
const { userController } = require("../controller");
const validate = require("../middleware/validate");
const { userValidation } = require("../validations");
let route = express.Router();

route.post("/register", validate(userValidation.user), userController.register);
route.get("/get", userController.getAllusers);
route.delete("/delete/:id", userController.deleteUser);
route.put(
  "/update/:id",
  validate(userValidation.user),
  userController.updateUser
);

module.exports = route;
