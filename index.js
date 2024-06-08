// console.log("hello world");

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

// built-in middleware function in Express parses incoming requests with JSON این باعث میشه که API کار کنه
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});

// دریافت همه محصولات از دیتابیس
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// دریافت یک محصول از دیتابیس با آی دی
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ارسال محصولات به دیتابیس
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ویرایش یک محصول
app.put("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "محصول وجود ندارد"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // حذف یک محصول
  app.delete('/api/product/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
    
      if(!product) {
        return res.status(404).json({message: "محصول وجود ندارد"});
    }

    res.status(200).json({message: "محصول با موفقیت حذف شد"});



    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

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
