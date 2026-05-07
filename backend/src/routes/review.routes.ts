import {
  createReview,
  getReviewsByProduct,
  editReview,
  deleteReview,
} from "../controllers/review.controller";
import { authenticateToken } from "../middleware/auth.middleware";
import { Router } from "express";

export const reviewRouter = Router();

reviewRouter.post(
  "/products/:id/reviews",
  authenticateToken,
  createReview as any,
);
reviewRouter.get("/products/:id/reviews", getReviewsByProduct as any);
reviewRouter.put("/reviews/:id", authenticateToken, editReview as any);
reviewRouter.delete("/reviews/:id", authenticateToken, deleteReview as any);
