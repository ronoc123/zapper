import express from "express";
const router = express.Router();

import authenticateUser from "../middleware/authorize.js";
import authorizePermissions from "../middleware/authorizePermissions.js";

import { getSingleUserInfo } from "../contollers/userInfo.js";

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getSingleUserInfo);

export default router;
