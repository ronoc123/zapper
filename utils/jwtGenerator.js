dotenv.config();
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const jwtGenerator = (user_id, user_name, email, user_role) => {
  console.log(user_id, user_name, email, user_role);
  const payload = {
    user: {
      id: user_id,
      user_name,
      email,
      user_role,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "24h" });
};

export default jwtGenerator;
