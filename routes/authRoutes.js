import express from "express";
const router = express.Router();
import authenticateUser from "../middleware/authorize.js";
import {
  register,
  login,
  updateUser,
  adminUpdateUser,
} from "../contollers/authController.js";
import authorizePermissions from "../middleware/authorizePermissions.js";

router.route("/register").post(register);
router.route("/adminupdate").patch(adminUpdateUser);

router.route("/login").post(login);
router.route("/updateuser").patch(authenticateUser, updateUser);

export default router;
