let jwt = require("jsonwebtoken");

let createToken = (data) => {
  console.log(data, "jwt");

  let token = jwt.sign(data, process.env.SECRET);
  return token;
};

module.exports = { createToken };
