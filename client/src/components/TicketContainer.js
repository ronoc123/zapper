import React from "react";
import { useAppContext } from "../context/appContext";
import Ticket from "../components/Ticket.js";

const TicketContainer = () => {
  const { myTickets, searchForm, filtered_tickets } = useAppContext();
  if (searchForm) {
    return (
      <div className="ticket-container">
        <div className="ticket">
          <div className="ticket-title">title</div>
          <div className="ticket-description big-screen">description</div>
          <div className="ticket-type big-screen">type</div>
          <div className="ticket-severity">Severity</div>
          <div className="ticket-status">status</div>
          <div className="ticket-dev">devs assigned</div>
        </div>
        {filtered_tickets.map((ticket) => {
          const { id } = ticket;
          return <Ticket key={id} {...ticket} />;
        })}
      </div>
    );
  }
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="ticket-title">title</div>
        <div className="ticket-description big-screen medium">description</div>
        <div className="ticket-type big-screen medium">type</div>
        <div className="ticket-severity small">Severity</div>
        <div className="ticket-status small">status</div>
        <div className="ticket-dev">Links</div>
      </div>
      {myTickets.map((ticket) => {
        const { id } = ticket;
        return <Ticket key={id} {...ticket} />;
      })}
    </div>
  );
};

export default TicketContainer;
