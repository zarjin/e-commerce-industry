import { Router } from "express";
import {
  createProduct,
  products,
  product,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

export const productRouter = Router();

productRouter.post("/create", createProduct);
productRouter.get("/products", products);
productRouter.get("/product/:id", product);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.put("/update/:id", updateProduct);
