let jwt = require("jsonwebtoken");

let createToken = (data) => {
  console.log(data, "jwt");

  let token = jwt.sign(data, process.env.SECRET);
  return token;
};

let isLogin = (req, res, next) => {
  try {
    let token = req.cookies["token"];
    if (!token) {
      throw new Error("you are not login");
    }

    let user = jwt.verify(token, process.env.SECRET);
    console.log(user);
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let isRestrict = ([...role]) => {
  return (req, res, next) => {
    if (role.includes(req.user.user.role)) {
      next();
    } else {
      throw new Error("user not allowed");
    }
  };
};

module.exports = { createToken, isLogin, isRestrict };
