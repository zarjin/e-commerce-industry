import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { envConfig } from "./config/env";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
