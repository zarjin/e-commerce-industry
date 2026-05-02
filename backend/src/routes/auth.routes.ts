import {
  register,
  login,
  logout,
  refreshToken,
} from "../controllers/auth.controller";

import { Router } from "express";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/refresh-token", refreshToken);
