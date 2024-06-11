// console.log("hello world");

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();

// built-in middleware function in Express parses incoming requests with JSON این باعث میشه که API کار کنه
app.use(express.json());
// built-in middleware function in Express parses for post and put request
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});




mongoose
  .connect(
    "mongodb+srv://aghp81:DAHHNyAufi9OWwLv@backenddb.qogzrsv.mongodb.net/node-crud-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("به دیتابیس وصل شدید Success");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("خطا در اتصال به دیتابیس failed");
  });
