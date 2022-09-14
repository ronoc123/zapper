import express from "express";
const router = express.Router();

import {
  createTicket,
  getAllUserTicket,
  editTicket,
  deleteTicket,
  getAllTicketOnProject,
  getAllTickets,
  getSingleTicket,
} from "../contollers/ticket.js";

router.route("/alltickets").get(getAllTickets);
router.route("/").get(getAllUserTicket);
router.route("/singleticket/:id").get(getSingleTicket);
router
  .route("/:id")
  .patch(editTicket)
  .delete(deleteTicket)
  .post(createTicket)
  .get(getAllTicketOnProject);

export default router;
