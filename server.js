const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config();

//routes
const product = require("./routes/product.js");
const user = require("./routes/user.js");
const order = require("./routes/order.js");
const upload = require("./routes/upload.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("mongodb connected");
  }
);
app.use("/api/products", product);
app.use("/api/users", user);
app.use("/api/orders", order);
app.use("/api/uploads", upload);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/api/config/google", (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || "");
});
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));
app.use(express.static(path.join(path.resolve(), "client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(path.resolve(), "client/build/index.html"))
);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

//expressAsyncHandler error handler middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
