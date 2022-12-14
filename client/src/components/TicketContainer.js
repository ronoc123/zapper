import React from "react";
import { useAppContext } from "../context/appContext";
import Ticket from "../components/Ticket.js";
import { useEffect } from "react";

const TicketContainer = () => {
  const { myTickets, searchForm, filtered_tickets, getMyTickets } =
    useAppContext();

  useEffect(() => {
    getMyTickets();
  }, []);

  if (searchForm) {
    return (
      <div className="ticket-container">
        <div className="ticket">
          <div className="ticket-title">title</div>
          <div className="ticket-description big-screen">description</div>
          <div className="ticket-type big-screen center">type</div>
          <div className="ticket-severity center">Severity</div>
          <div className="ticket-status center">status</div>
          <div className="ticket-dev">Links</div>
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
        <div className="ticket-type big-screen medium center">type</div>
        <div className="ticket-severity small center">Severity</div>
        <div className="ticket-status small center">status</div>
        <div className="ticket-dev">Links</div>
      </div>
      {myTickets.length > 0 ? (
        myTickets.map((ticket) => {
          const { id } = ticket;
          return <Ticket key={id} {...ticket} />;
        })
      ) : (
        <h1 className="no-tickets">No Tickets...</h1>
      )}
    </div>
  );
};

export default TicketContainer;
