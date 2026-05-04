import {
  profile,
  updateProfile,
  users,
  deleteAccount,
} from "../controllers/user.controller";
import { profileUpload } from "../utils/multer";
import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";

export const userRouter = Router();
userRouter.get("/profile", authenticateToken, profile as any);
userRouter.put(
  "/profile",
  authenticateToken,
  profileUpload.single("avatar"),
  updateProfile as any,
);
userRouter.get("/", authenticateToken, users);
userRouter.delete("/account", authenticateToken, deleteAccount as any);
