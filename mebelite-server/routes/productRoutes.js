import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    console.log("test");
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
