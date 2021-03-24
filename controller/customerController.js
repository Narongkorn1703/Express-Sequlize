const { Customer } = require("../models");
exports.getAllCustomers = async (req, res, next) => {
  try {
    const customer = await Customer.findAll();
    console.log(JSON.parse(JSON.stringify(customer)));
    res.status(201).json({ result: customer });
  } catch (err) {
    next(err);
  }
};
exports.getCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({ where: { id } });
    res.status(201).json({ customer });
  } catch (err) {
    next(err);
  }
};
exports.createCustomer = async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const customer = await Customer.create({
      name: name,
      address: address,
    });
    console.log(JSON.parse(JSON.stringify(customer)));
    res.status(201).json({ customer });
  } catch (err) {
    next(err);
  }
};
exports.mutipleCustomer = (req, res, next) => {
  res.status(201).json({ message: "Create Customers" });
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const { id } = req.params;

    const customer = await Customer.update(
      { name, address },
      { where: { id } }
    ).then(([result]) => {
      if (result) return Customer.findOne({ where: { id: id } });
    });
    console.log(customer);

    res.status(201).json({ customer });
  } catch (err) {
    next(err);
  }
};
exports.deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = Customer.destroy({ where: { id } });
    res.status(201).json({ message: "deleted Customer " });
  } catch (err) {
    next(err);
  }
};
