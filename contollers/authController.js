import { StatusCodes } from "http-status-codes";
import db from "../db/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtGenerator from "../utils/jwtGenerator.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js";

const register = async (req, res) => {
  const { user_name, email, user_password, user_role } = req.body;

  if (!user_name || !email || !user_password) {
    throw new BadRequestError("Please provide all fields.");
  }

  const userAlreadyExists = await db.query(
    "SELECT email FROM user_account WHERE email = $1",
    [email]
  );

  if (userAlreadyExists.rows.length > 0) {
    throw new BadRequestError("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(user_password, salt);

  const newUser = await db.query(
    "INSERT INTO user_account(user_name, email, user_password, user_role) VALUES($1, $2, $3, $4) RETURNING *",
    [user_name, email, password, user_role]
  );
  const token = jwtGenerator(
    newUser.rows[0].user_id,
    newUser.rows[0].user_name,
    newUser.rows[0].email,
    newUser.rows[0].user_role
  );

  res.status(StatusCodes.CREATED).json({ user: newUser.rows, token });
};

const login = async (req, res) => {
  const { email, user_password } = req.body;

  if (!email || !user_password) {
    throw new BadRequestError("Please provide input all fields");
  }

  const user = await db.query("SELECT * FROM user_account WHERE email = $1", [
    email,
  ]);

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials ");
  }

  const validPassword = await bcrypt.compare(
    user_password,
    user.rows[0].user_password
  );

  if (!validPassword) {
    throw new UnauthenticatedError("Incorrect Password");
  }

  const token = jwtGenerator(
    user.rows[0].user_id,
    user.rows[0].user_name,
    user.rows[0].email,
    user.rows[0].user_role
  );

  //    res.status(StatusCodes.OK).json({ user: user.rows[0], token });

  res.status(StatusCodes.OK).json({ user: user.rows, token });
};

const updateUser = async (req, res) => {
  const { user_name, email } = req.body;
  const user_id = req.user.user.id;

  if (!user_name || !email) {
    throw new BadRequestError("Please provide all values!");
  }

  const user = await db.query(
    "UPDATE user_account SET user_name = $1, email = $2 WHERE user_id = $3 RETURNING *",
    [user_name, email, user_id]
  );
  const token = jwtGenerator(user.rows[0].user_id);

  res.status(StatusCodes.OK).json({ user: user.rows, token });
};

const adminUpdateUser = async (req, res) => {
  const { user_name, email, user_role, user_id } = req.body;

  if (!user_name || !email || !user_role || !user_id) {
    throw new BadRequestError("Please provide all values");
  }

  const newUser = await db.query(
    "UPDATE user_account SET user_name = $1, email = $2, user_role = $3 WHERE user_id = $4 RETURNING *",
    [user_name, email, user_role, user_id]
  );

  res.status(StatusCodes.OK).json({ user: newUser.rows });
};

export { register, login, updateUser, adminUpdateUser };
