import { IProduct } from "../types/product";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
