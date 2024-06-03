const { orderSchema } = require("../model");

let createOrder = (body) => {
  return orderSchema.create(body);
};

let getOrder = () => {
  return orderSchema.find().populate("productName").populate("userName");
};

module.exports = { createOrder, getOrder };
