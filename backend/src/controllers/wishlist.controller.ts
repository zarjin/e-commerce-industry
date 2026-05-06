import { WishList } from "../model/wishlist";
import { Request, Response } from "express";
import { product } from "./product.controller";

type AuthRequest = Request & { user: { id: string } };

export const AddToWishList = async (req: AuthRequest, res: Response) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "User ID and Product ID are required",
        success: false,
      });
    }

    const existingWishlist = await WishList.findOne({
      user: userId,
      products: { $in: [productId as string] },
    });

    if (existingWishlist) {
      return res.status(409).json({
        message: "Product already in wishlist",
        success: false,
      });
    }

    const wishlistItem = await WishList.create({
      user: userId,
      products: [productId as string],
    });

    return res.status(200).json({
      message: "Product added to wishlist successfully",
      success: true,
      wishlistItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add product to wishlist",
      success: false,
      error,
    });
  }
};

export const GetWishList = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
      });
    }

    const wishlist = await WishList.find({ user: userId }).populate("products");

    return res.status(200).json({
      message: "Wishlist retrieved successfully",
      success: true,
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve wishlist",
      success: false,
      error,
    });
  }
};

export const RemoveFromWishList = async (req: AuthRequest, res: Response) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "User ID and Product ID are required",
        success: false,
      });
    }

    const wishlist = await WishList.findOne({ user: userId });

    if (!wishlist) {
      return res.status(404).json({
        message: "Wishlist not found",
        success: false,
      });
    }

    const productIndex = wishlist.products.findIndex(
      (product) => product.toString() === productId,
    );

    if (productIndex === -1) {
      return res.status(404).json({
        message: "Product not found in wishlist",
        success: false,
      });
    }

    wishlist.products.splice(productIndex, 1);
    await wishlist.save();

    return res.status(200).json({
      message: "Product removed from wishlist successfully",
      success: true,
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to remove product from wishlist",
      success: false,
      error,
    });
  }
};
