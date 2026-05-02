import mongoose from "mongoose";
export interface IPayload {
  id: mongoose.Types.ObjectId;
  email: string;
  role: string;
}
