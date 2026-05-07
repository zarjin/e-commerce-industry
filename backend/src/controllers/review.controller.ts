import { Review } from "../model/review";
import { Request, Response } from "express";

type AuthRequest = Request & { user: { id: string } };

export const createReview = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    const { rating, comment } = req.body;

    if (!productId || !rating || !comment) {
      return res.status(400).json({
        message: "Product ID, rating, and comment are required",
        success: false,
      });
    }

    const review = new Review({
      user: userId,
      product: productId,
      rating,
      comment,
    });

    await review.save();

    return res.status(201).json({
      message: "Review created successfully.",
      success: true,
      review,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating the review.",
      success: false,
      error,
    });
  }
};

export const getReviewsByProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        message: "Product ID is required",
        success: false,
      });
    }

    const reviews = await Review.find({ product: productId }).populate(
      "user",
      "name avatar",
    );

    return res.status(200).json({
      message: "Reviews retrieved successfully.",
      success: true,
      reviews,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while fetching reviews.",
      success: false,
      error,
    });
  }
};

export const editReview = async (req: AuthRequest, res: Response) => {
  try {
    const reviewId = req.params.id;
    const { comment, rating } = req.body;

    if (!comment || !rating) {
      return res.status(400).json({
        message: "Comment and rating are required",
        success: false,
      });
    }

    const review = await Review.findByIdAndUpdate(
      reviewId,
      { comment, rating },
      { new: true },
    );

    return res.status(200).json({
      message: "Review updated successfully.",
      success: true,
      review,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while editing the review.",
      success: false,
      error,
    });
  }
};

export const deleteReview = async (req: AuthRequest, res: Response) => {
  try {
    const reviewId = req.params.id;

    await Review.findByIdAndDelete(reviewId);
    return res.status(200).json({
      message: "Review deleted successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting the review.",
      success: false,
      error,
    });
  }
};
