import React from "react";

import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const Ticket = ({ title, description, type, severity, status, id }) => {
  const { deleteTicket } = useAppContext();

  return (
    <div className="ticket">
      <div className="ticket-title-info">{title}</div>
      <div className="ticket-description-info medium">{description}</div>
      <div className="ticket-type-info medium">{type}</div>
      <div className="ticket-severity-info small">{severity}</div>
      <div className="ticket-status-info small">{status}</div>
      <div className="ticket-links">
        <Link to={`/singleticket/${id}`}>Info</Link>
        <Link to={`/editticket/${id}`}>Edit</Link>
        <BsTrash className="trash-icon" onClick={() => deleteTicket(id)} />
      </div>
    </div>
  );
};

export default Ticket;
