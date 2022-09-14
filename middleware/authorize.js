dotenv.config();
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  //   const token = req.header("token");
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.jwtSecret);
    req.user = payload;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Unauthorized");
  }
};

export default auth;
