const {
  Order,
  OrderItem,
  Customer,
  Employee,
  Product,
  sequelize,
  Supplier,
} = require("../models");
exports.getAllOrders = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: { model: Product, attributes: ["id", "name"] },

          attributes: ["id", "amount", "price", "discount"],
        },
        { model: Customer, attributes: ["id", "name"] },
        { model: Employee, attributes: ["id", "name"] },
      ],
      attributes: ["id", "date"],
    });
    console.log(JSON.parse(JSON.stringify(order)));
    res.status(201).json({ result: order });
  } catch (err) {
    next(err);
  }
};
exports.getOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findOne({
      include: [
        {
          model: OrderItem,
          include: { model: Product, attributes: ["id", "name"] },

          attributes: ["id", "amount", "price", "discount"],
        },
        { model: Customer, attributes: ["id", "name"] },
        { model: Employee, attributes: ["id", "name"] },
      ],
      attributes: ["id", "date"],

      where: { id },
    });
    console.log(JSON.parse(JSON.stringify(order)));
    res.status(201).json({ result: order });
  } catch (err) {
    next(err);
  }
};
exports.createOrder = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { date, customerId, employeeId, orderItems } = req.body;
  } catch (err) {
    next(err);
  }
};
exports.updateOrder = (req, res, next) => {};
exports.deleteOrder = (req, res, next) => {};
