import { Router } from "express";
import {
  createProduct,
  products,
  product,
  deleteProduct,
  updateProduct,
  searchProduct,
} from "../controllers/product.controller";
import { productUpload } from "../utils/multer";

export const productRouter = Router();

productRouter.post("/create", productUpload.single("imageUrl"), createProduct);
productRouter.get("/products", products);
productRouter.get("/product/:id", product);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.put(
  "/update/:id",
  productUpload.single("imageUrl"),
  updateProduct,
);
productRouter.post("/search", searchProduct);
