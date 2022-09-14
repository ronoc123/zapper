dotenv.config();
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import db from "./db/index.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/authorize.js";

import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import projectUsersRouter from "./routes/projectUsers.js";
import ticketRouter from "./routes/ticketRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import userTicketRouter from "./routes/ticketUsers.js";
import userInfoRouter from "./routes/userInfoRoutes.js";

const app = express();

// if (process.env.NODE_ENV !== 'production') {
//   app.use(morgan('dev'))
// }

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2000,
  standardHeaders: true,
  legacyHeaders: false,
});
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(limiter);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", authenticateUser, projectRouter);
app.use("/api/v1/projectusers", projectUsersRouter);
app.use("/api/v1/ticket", authenticateUser, ticketRouter);
app.use("/api/v1/comment", authenticateUser, commentRouter);
app.use("/api/v1/ticketusers", userTicketRouter);
app.use("/api/v1/userinfo", userInfoRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
