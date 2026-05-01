import mongoose from "mongoose";
export interface ICart {
  user: mongoose.Types.ObjectId;
  products: {
    product: mongoose.Types.ObjectId;
    quantity: number;
  };
}
