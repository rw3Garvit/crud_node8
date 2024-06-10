const { userService } = require("../service");
const sendEmail = require("../service/email.service");

let register = async (req, res) => {
  try {
    console.log(req.body);

    let body = req.body;

    let user = await userService.register(body);

    //email service

    // if (user) {
    //   let result = await sendEmail(
    //     user.email,
    //     "this is test mail",
    //     `welcome ${user.email}`
    //   );
    //   console.log(result);
    // }

    // console.log(user, "res");

    res.status(201).json({
      message: "user register successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

let getAllusers = async (req, res) => {
  let users = await userService.findAllUser();

  res.status(200).json({
    message: "get all user success",
    users,
  });
};

let deleteUser = async (req, res) => {
  console.log(req.params);

  let { id } = req.params;

  let user = await userService.deleteUser(id);

  console.log(user);

  res.status(200).json({
    message: "user deleted success",
    user,
  });
};

let updateUser = async (req, res) => {
  let body = req.body;
  let { id } = req.params;

  let result = await userService.updateUser(id, body);

  res.status(200).json({
    message: "user updated sucess",
    result,
  });
};

let login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userService.findUser(email);
    console.log(user, "result");

    if (!user) {
      throw new Error("user not found!");
    }
    if (user.password != password) {
      throw new Error("password invalid");
    }

    res.status(200).json({
      message: "login successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { register, getAllusers, deleteUser, updateUser, login };
