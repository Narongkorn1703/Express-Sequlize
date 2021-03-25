module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      salary: DataTypes.DECIMAL(10, 2),
    },
    {
      timestamps: false,
      tableName: "employees",
    }
  );
  Employee.associate = (models) => {
    Employee.hasMany(
      models.Order,
      {
        foreignKey: {
          name: `employeeId`,

          field: `employee_id`,
        },
      },
      { onUpdate: `RESTRICT`, onDelete: `RESTRICT` }
    );
    Employee.belongsTo(models.Department, {
      foreignKey: {
        name: `departmentId`,
        allowNull: false,
        field: `department_id`,
      },
      onUpdate: `RESTRICT`,
      onDelete: `RESTRICT`,
    });
  };
  return Employee;
};
