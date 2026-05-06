import {
  AddToWishList,
  GetWishList,
  RemoveFromWishList,
} from "../controllers/wishlist.controller";

import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";

export const wishlistRouter = Router();

wishlistRouter.post("/add/:id", authenticateToken, AddToWishList as any);
wishlistRouter.get("/", authenticateToken, GetWishList as any);
wishlistRouter.delete(
  "/remove/:id",
  authenticateToken,
  RemoveFromWishList as any,
);
