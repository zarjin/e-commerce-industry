import mongoose from "mongoose";
export interface IWishList {
  user: mongoose.Types.ObjectId;
  products: mongoose.Types.ObjectId[];
}
