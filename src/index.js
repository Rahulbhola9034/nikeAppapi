const express = require("express");
const cors = require("cors");
const paymentRoutes = require("./router/paymentRoutes");
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("<h2>Hello world!</h2>");
});

app.listen(PORT, () => {
  console.log("API is listening on port ", PORT);
});
