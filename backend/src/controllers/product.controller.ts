import { Request, Response } from "express";
import { Product } from "../model/product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, imageUrl } = req.body;

    if (!name || !description || !price || !category || !imageUrl) {
      return res
        .status(409)
        .json({ message: "must all product filed required", success: false });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      imageUrl: req.file ? req.file.path : imageUrl,
    });

    return res
      .status(200)
      .json({ message: "product create successfully", success: true, product });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating product", success: false, error });
  }
};

export const products = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      message: "product fetch successfully",
      success: true,
      products,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "products fetch error", success: false, error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([_, value]) => value !== undefined),
    );

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updates },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product update error",
      success: false,
      error,
    });
  }
};

export const product = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    return res.status(200).json({
      message: "product fetch successfully",
      success: true,
      product,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "product fetch error", success: false, error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    return res.status(200).json({
      message: "product delete successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "product delete error", success: false, error });
  }
};

export const searchProduct = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;

    if (!key) {
      return res.status(400).json({
        success: false,
        message: "Search key is required",
      });
    }

    const searchData = await Product.find({
      $or: [
        { name: { $regex: key, $options: "i" } },
        { category: { $regex: key, $options: "i" } },
      ],
    });

    if (searchData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: searchData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product search error",
      success: false,
      error,
    });
  }
};
