import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";

const addUserToTicket = async (req, res) => {
  const user_id = req.body.id;

  const ticket_id = req.params.id;

  const projectInfo = await db.query(
    "SELECT project_id FROM ticket WHERE id = $1",
    [ticket_id]
  );
  const project_id = projectInfo.rows[0].project_id;

  await db.query(
    "INSERT INTO ticket_interactions(userID, ticketID, projectID) VALUES($1, $2, $3)",
    [user_id, ticket_id, project_id]
  );

  res.status(StatusCodes.CREATED).send("User added to Ticket.");
};

const userOnTicket = async (req, res) => {
  const id = req.params.id;

  const users = await db.query(
    "SELECT user_name FROM user_account JOIN ticket_interactions ON user_account.user_id = ticket_interactions.userID JOIN ticket ON ticket.id = ticket_interactions.ticketID WHERE ticket.id = $1",
    [id]
  );
  let developers = [];
  users.rows.map((dev) => {
    developers.push(dev.user_name);
  });

  res.status(StatusCodes.OK).json({ developers });
};

const getAllUserTicket = async (req, res) => {
  const user_id = req.user.user.id;

  const tickets = await db.query(
    "SELECT * FROM ticket JOIN ticket_interactions ON ticket.id = ticket_interactions.ticketid WHERE userid = $1",
    [user_id]
  );

  res.status(StatusCodes.OK).json({ tickets: tickets.rows });
};

export { userOnTicket, addUserToTicket, getAllUserTicket };
