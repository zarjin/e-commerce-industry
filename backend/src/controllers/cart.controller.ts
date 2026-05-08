import mongoose from "mongoose";
import { Cart } from "../model/cart";
import { Request, Response } from "express";

type AuthRequest = Request & { user: { id: string } };

export const addCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "userId & productId not found",
        success: false,
      });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({
        user: userId,
        products: [],
      });
    }

    const existingProductIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (existingProductIndex > -1) {
      cart.products[existingProductIndex].quantity += 1;
    } else {
      cart.products.push({
        product: new mongoose.Types.ObjectId(productId as string),
        quantity: 1,
      });
    }

    await cart.save();

    return res.status(200).json({
      message: "Product added to cart",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

export const getCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({
        message: "userId not found",
        success: false,
      });
    }

    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product",
    );

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Cart found",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

export const removeCart = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "userId & productId not found",
        success: false,
      });
    }

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
        success: false,
      });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (productIndex === -1) {
      return res.status(404).json({
        message: "Product not found in cart",
        success: false,
      });
    }

    cart.products.splice(productIndex, 1);
    await cart.save();

    return res.status(200).json({
      message: "Product removed from cart",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};
