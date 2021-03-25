module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "orders",
    }
  );

  Order.associate = (models) => {
    Order.hasMany(
      models.OrderItem,
      {
        foreignKey: {
          name: `orderId`,
          allowNull: false,
          field: `order_id`,
        },
      },
      { onUpdate: `RESTRICT`, onDelete: `RESTRICT` }
    );
    Order.belongsTo(models.Customer, {
      foreignKey: {
        name: `customerId`,
        allowNull: false,
        field: `customer_id`,
      },
      onUpdate: `RESTRICT`,
      onDelete: `RESTRICT`,
    });
    Order.belongsTo(models.Employee, {
      foreignKey: {
        name: `employeeId`,
        allowNull: false,
        field: `employee_id`,
      },
      onUpdate: `RESTRICT`,
      onDelete: `RESTRICT`,
    });
  };
  return Order;
};
