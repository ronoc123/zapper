import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";
import moment from "moment";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

const createTicket = async (req, res) => {
  const user_id = Number(req.user.user.id);
  const id = Number(req.params.id);
  const { title, description, type, severity, status } = req.body;
  const date = new Date();
  const formattedDate = moment(date).format();
  const ticket = await db.query(
    "INSERT INTO ticket(title, description, type, severity, status, createdBy, project_id, createdat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [title, description, type, severity, status, user_id, id, formattedDate]
  );
  res.status(StatusCodes.CREATED).json({ ticket: ticket.rows });
};

const getAllTickets = async (req, res) => {
  const allTickets = await db.query("SELECT * FROM ticket");
  res.status(StatusCodes.OK).json({ Tickets: allTickets.rows });
};

const getAllUserTicket = async (req, res) => {
  const user_id = req.user.user.id;

  const tickets = await db.query(
    "SELECT id, title, description, type, severity, status, createdat FROM ticket WHERE createdby = $1",
    [user_id]
  );

  res.status(StatusCodes.OK).json({ tickets: tickets.rows });
};

const editTicket = async (req, res) => {
  const id = req.params.id;
  const { title, description, type, severity, status } = req.body;

  const updatedTicket = await db.query(
    "UPDATE ticket SET title = $1, description = $2, type = $3, status = $4, severity = $5 WHERE id = $6 RETURNING *",
    [title, description, type, status, severity, id]
  );

  res.status(StatusCodes.OK).json({ ticket: updatedTicket.rows });
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;
  const { id: user_id } = req.user.user;

  const testId = await db.query("SELECT createdby FROM ticket WHERE id = $1", [
    id,
  ]);

  // Check if the user was the one who created the TICKET

  if (testId.rows[0].createdby != user_id) {
    throw new UnauthenticatedError("You did not create this ticket!");
  }

  // DELETE comments on the ticket

  await db.query("DELETE FROM comment WHERE ticket_id = $1", [id]);

  // DELETE ticket_interactions

  await db.query("DELETE FROM ticket_interactions WHERE ticketid = $1", [id]);

  // DELETE TICKET
  await db.query("DELETE FROM ticket WHERE id = $1", [id]);

  res.status(StatusCodes.OK).send("Ticket Deleted!");
};

const getAllTicketOnProject = async (req, res) => {
  const id = req.params.id;

  const projectTickets = await db.query(
    "SELECT * FROM ticket WHERE project_id = $1",
    [id]
  );

  res.status(StatusCodes.OK).json({ tickets: projectTickets.rows });
};

const getSingleTicket = async (req, res) => {
  const id = req.params.id;

  const ticket = await db.query("SELECT * FROM ticket WHERE id = $1", [id]);

  res.status(StatusCodes.OK).json({ ticket: ticket.rows });
};

export {
  createTicket,
  getAllUserTicket,
  editTicket,
  deleteTicket,
  getAllTicketOnProject,
  getAllTickets,
  getSingleTicket,
};
