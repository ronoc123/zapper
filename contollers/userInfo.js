import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";

const getSingleUserInfo = async (req, res) => {
  const id = req.query.id;
  const user = await db.query(
    "SELECT user_name, email, user_role, user_id FROM user_account WHERE user_id = $1",
    [id]
  );

  res.status(StatusCodes.OK).json({ user: user.rows });
};

export { getSingleUserInfo };
