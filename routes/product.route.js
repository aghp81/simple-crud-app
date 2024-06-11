const express = require("express");
const Product = require("./models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')


//ایجاد روتر برای دریافت همه محصولات از دیتابیس 
router.get("/", getProducts)

//ایجاد روتر برای دریافت یک محصولات از دیتابیس 
router.get("/:id", getProduct)

//ایجاد روتر برای ایجاد محصولات در دیتابیس 
router.post("/", createProduct);


//ایجاد روتر برای ویرایش محصول در دیتابیس 
router.put("/:id", updateProduct);

//ایجاد روتر برای حذف محصول در دیتابیس 
router.delete("/:id", deleteProduct);


module.exports = router;