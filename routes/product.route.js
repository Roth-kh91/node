import express from "express";
import {createProduct,getProducts,getOneProduct, updateProduct, deleteProduct} from "../controller/product.controller.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
