import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;
const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET;
const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
const jwtAccessExpires = process.env.JWT_ACCESS_EXPIRES;
const jwtRefreshExpires = process.env.JWT_REFRESH_EXPIRES;
const frontendUrl = process.env.FRONTEND_URL;

if (!port) {
  throw new Error("PORT is not defined in environment variables");
}

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

if (!cloudinaryCloudName) {
  throw new Error(
    "CLOUDINARY_CLOUD_NAME is not defined in environment variables",
  );
}

if (!cloudinaryApiKey) {
  throw new Error("CLOUDINARY_API_KEY is not defined in environment variables");
}

if (!cloudinaryApiSecret) {
  throw new Error(
    "CLOUDINARY_API_SECRET is not defined in environment variables",
  );
}

if (!jwtAccessSecret) {
  throw new Error("JWT_ACCESS_SECRET is not defined in environment variables");
}

if (!jwtRefreshSecret) {
  throw new Error("JWT_REFRESH_SECRET is not defined in environment variables");
}

if (!jwtAccessExpires) {
  throw new Error("JWT_ACCESS_EXPIRES is not defined in environment variables");
}

if (!jwtRefreshExpires) {
  throw new Error(
    "JWT_REFRESH_EXPIRES is not defined in environment variables",
  );
}

if (!frontendUrl) {
  console.warn(
    "FRONTEND_URL is not defined in environment variables. Using default value http://localhost:5173",
  );
}

export const envConfig = {
  PORT: port,
  MONGO_URI: mongoUri,
  CLOUDINARY_CLOUD_NAME: cloudinaryCloudName,
  CLOUDINARY_API_KEY: cloudinaryApiKey,
  CLOUDINARY_API_SECRET: cloudinaryApiSecret,
  JWT_ACCESS_SECRET: jwtAccessSecret,
  JWT_REFRESH_SECRET: jwtRefreshSecret,
  JWT_ACCESS_EXPIRES: jwtAccessExpires,
  JWT_REFRESH_EXPIRES: jwtRefreshExpires,
  FRONTEND_URL: frontendUrl,
};
