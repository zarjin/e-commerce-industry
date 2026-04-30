import mongoose from "mongoose";
import { envConfig } from "./env";

export const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.MONGO_URI);
    console.log("Connect successfully with MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
