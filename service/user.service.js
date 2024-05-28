const { userSchema } = require("../model");

let register = (body) => {
  console.log(body, "serviecde");

  return userSchema.create(body);
};

let findAllUser = () => {
  return userSchema.find();
};

let deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

module.exports = { register, findAllUser, deleteUser };
