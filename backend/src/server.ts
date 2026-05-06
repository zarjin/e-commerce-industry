import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { corsConfig } from "./config/cors";
import { envConfig } from "./config/env";
import { connectDB } from "./config/db";
import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/user.routes";
import { productRouter } from "./routes/product.routes";
import { wishlistRouter } from "./routes/wishlist.routes";

const app = express();

// 🔐 Security first
app.use(helmet());

// 🌐 CORS
app.use(corsConfig);

// 📜 Logger
app.use(morgan("dev"));

// 🧠 Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🍪 Cookie parser
app.use(cookieParser());

// 🏠 Health route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// 🔑 Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/wishlist", wishlistRouter);
// 🚨 Global Error Handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  },
);

// 🚀 Start Server (DB must connect first)
const startServer = async () => {
  try {
    await connectDB();

    app.listen(envConfig.PORT, () => {
      console.log(`🚀 Server running on port ${envConfig.PORT}`);
    });
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    process.exit(1);
  }
};

startServer();
