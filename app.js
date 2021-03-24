const express = require("express");
const { sequelize } = require("./models");
const customerRoute = require("./Routes/customerRouter");
const productRoute = require("./Routes/productRouter");
const orderRoute = require("./Routes/orderRouter");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/customers", customerRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "Page not Found bitch!" });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});
// sequelize.sync({ force: true });
const port = 8000;
app.listen(port, () => console.log(`server is running on ${port}`));
