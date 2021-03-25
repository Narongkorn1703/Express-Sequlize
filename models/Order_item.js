module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      discount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      tableName: "order_items",
    }
  );
  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Product, {
      foreignKey: {
        name: `product_Id`,
        allowNull: false,
        field: `product_id`,
      },
      onUpdate: `RESTRICT`,
      onDelete: `RESTRICT`,
    });
    OrderItem.belongsTo(models.Order, {
      foreignKey: {
        name: `orderId`,
        allowNull: false,
        field: `order_id`,
      },
      onUpdate: `RESTRICT`,
      onDelete: `RESTRICT`,
    });
  };
  return OrderItem;
};
