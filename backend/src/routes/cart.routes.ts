import { Router } from "express";
import { addCart, getCart, removeCart } from "../controllers/cart.controller";

export const cartRouter = Router();

cartRouter.post("/add/:id", addCart as any);
cartRouter.get("/", getCart as any);
cartRouter.delete("/remove/:id", removeCart as any);
