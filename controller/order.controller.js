const { orderService } = require("../service");

let createOrder = async (req, res) => {
  let body = req.body;

  console.log(body);

  let order = await orderService.createOrder(body);
  res.status(201).json({
    message: "order created success",
    order,
  });
};

let getOrder = async (req, res) => {
  let order = await orderService.getOrder();

  res.status(200).json({
    message: "order get success",
    order,
  });
};

module.exports = { createOrder, getOrder };
