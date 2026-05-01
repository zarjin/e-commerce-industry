import mongoose from "mongoose";
import { ICart } from "../types/cart";

const cartSchema = new mongoose.Schema<ICart>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

export const Cart = mongoose.model<ICart>("Cart", cartSchema);
