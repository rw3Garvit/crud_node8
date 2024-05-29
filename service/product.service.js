const { productSchema } = require("../model");

let addProduct = (body) => {
  return productSchema.create(body);
};

let findByName = (name) => {
  return productSchema.findOne({ name });
};

module.exports = { addProduct, findByName };
