import express from "express";

import morgan from "morgan";
import cookieParser from "cookie-parser";

import { corsConfig } from "./config/cors";
import { envConfig } from "./config/env";
import { connectDB } from "./config/db";
import { authRouter } from "./routes/auth.routes";

connectDB();

const app = express();
app.use(corsConfig);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.use("/api/v1/auth", authRouter);

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
