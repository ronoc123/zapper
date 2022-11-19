import Wrapper from "../assests/wrappers/TicketPage.js";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext.js";
import SearchContainer from "../components/SearchContainer.js";
import TicketContainer from "../components/TicketContainer.js";

const MyTickets = () => {
  const { getMyTickets, myTickets } = useAppContext();

  // useEffect(() => {
  //   getMyTickets();
  // }, []);

  return (
    <Wrapper className="full-page">
      <div className="heading">
        <h1 className="heading-title">My Tickets</h1>
      </div>
      <SearchContainer />
      <TicketContainer />
    </Wrapper>
  );
};

export default MyTickets;
