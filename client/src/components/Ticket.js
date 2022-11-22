import React, { useEffect } from "react";

import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { BsTrash, BsInfoCircle } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import EditTicketModal from "./EditTicketModal";

const Ticket = ({
  title,
  description,
  type,
  severity,
  status,
  id,
  remove,
  projectId,
}) => {
  const { deleteTicket, getMyTickets } = useAppContext();

  const [modal, setModal] = useState(false);

  function renewTickets(id) {
    deleteTicket(id);
    getMyTickets();
  }

  return (
    <>
      <div className="ticket">
        <div className="ticket-title-info">{title}</div>
        <div className="ticket-description-info medium">{description}</div>
        <div
          className={`ticket-type-info medium center1 ${
            type === "security defect" ? "red" : ""
          }
        ${type === "functional error" ? "red" : ""}${
            type === "usability defect" ? "green" : ""
          }${type === "security defect" ? "red" : ""}${
            type === "compatibility defect" ? "blue" : ""
          }${type === "other" ? "grey" : ""}
        `}
        >
          {type}
        </div>
        <div
          className={`ticket-severity-info small center1 ${
            severity === "low" ? "green" : ""
          } ${severity === "medium" ? "blue" : ""} ${
            severity === "high" ? "orange" : ""
          } ${severity === "critical" ? "red" : ""}`}
        >
          {severity}
        </div>
        <div
          className={`ticket-status-info small center1  ${
            status === "closed" ? "ticket-status-info small grey" : ""
          } ${status === "open" ? "green" : ""} ${
            status === "pending" ? "blue" : ""
          } `}
        >
          {status}
        </div>
        <div className="ticket-links">
          <Link to={`/singleticket/${id}`} className="details-btn ticket-link">
            <span className="icon-align">
              <BsInfoCircle />
            </span>
          </Link>
          <div className="edit-btn ticket-link" onClick={() => setModal(true)}>
            <span className="icon-align">
              <MdOutlineEdit />
            </span>
          </div>

          <span
            className="trash-icon ticket-link"
            onClick={() => renewTickets(id)}
          >
            <BsTrash />
          </span>
        </div>
      </div>
      {modal && (
        <EditTicketModal id={id} setModal={setModal} projectId={projectId} />
      )}
    </>
  );
};

export default Ticket;
