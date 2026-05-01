import mongoose from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  reviews: mongoose.Types.ObjectId[];
}
