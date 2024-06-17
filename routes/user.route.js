let express = require("express");
const { userController } = require("../controller");
const validate = require("../middleware/validate");
const { userValidation } = require("../validations");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.post("/register", validate(userValidation.user), userController.register);
route.get(
  "/get",
  isLogin,
  isRestrict(["admin", "user"]),
  userController.getAllusers
);
route.delete("/delete/:id", isRestrict(["admin"]), userController.deleteUser);
route.put(
  "/update/:id",
  validate(userValidation.user),
  userController.updateUser
);

//login

route.post("/login", validate(userValidation.user), userController.login);

route.get("/profile", isLogin, userController.getProfile);
module.exports = route;
