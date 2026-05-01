import { IWishList } from "../types/wishlist";
import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema<IWishList>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

export const WishList = mongoose.model<IWishList>("WishList", wishlistSchema);
