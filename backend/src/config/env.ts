import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

if (!PORT) {
  throw new Error("PORT is not defined in environment variables");
}

export const envConfig = {
  PORT,
};
