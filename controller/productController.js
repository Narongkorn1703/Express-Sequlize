const { Product } = require("../models");
exports.getAllProducts = async (req, res, next) => {
  try {
    const product = await Product.findAll();
    console.log(JSON.parse(JSON.stringify(product)));
    res.status(201).json({ result: product });
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    res.status(201).json({ product });
  } catch (err) {
    next(err);
  }
};
exports.createProduct = async (req, res, next) => {
  try {
    const { name, desc, price, quantity, supplierId } = req.body;
    const product = await Product.create({
      name: name,
      desc: desc,
      price: price,
      quantity: quantity,
      supplierId: supplierId,
    });
    console.log(JSON.parse(JSON.stringify(product)));
    res.status(201).json({ product });
  } catch (err) {
    next(err);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const { name, desc, price, quantity, supplierId } = req.body;
    const { id } = req.params;
    const product = await Product.update(
      {
        name,
        desc,
        price,
        quantity,
        supplierId,
      },
      { where: { id } }
    ).then(([result]) => {
      if (result) return Product.findOne({ where: { id: id } });
    });
    console.log(JSON.parse(JSON.stringify(product)));
    res.status(201).json({ product });
  } catch (err) {
    next(err);
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.destroy({ where: { id } });
    res.status(201).json({ message: "deleted Customer " });
  } catch (err) {
    next(err);
  }
};
