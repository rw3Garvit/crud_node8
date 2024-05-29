const { productService } = require("../service");

let addProduct = async (req, res) => {
  try {
    let body = req.body;

    let duplicate = await productService.findByName(body.name);

    if (duplicate) {
      throw new Error("product already exist");
    }

    let result = await productService.addProduct(body);

    if (!result) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "product added",
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { addProduct };
