import Wrapper from "../assests/wrappers/SingleProjectPage.js";
import { Link } from "react-router-dom";
import Ticket from "../components/Ticket";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";
import { useEffect } from "react";
import Project from "../components/Project.js";

const SingleProjectPage = () => {
  let { id } = useParams();
  const {
    fetchTicketsOnProject,
    fetchSingleProject,
    projectTicket,
    singleProject,
    fetchUsersOnProject,
    devsOnProject,
  } = useAppContext();

  useEffect(() => {
    fetchSingleProject(id);
    fetchTicketsOnProject(id);
    fetchUsersOnProject(id);
  }, []);
  return (
    <Wrapper className="full-page">
      <Project />
      <div className="title-1">
        <h1 className="title-text">Tickets on {singleProject[0]?.title}</h1>
        <Link to={`/addticket/${id}`} className="ticket-btn">
          Add Ticket
        </Link>
      </div>
      <div className="ticket-container">
        <div className="ticket">
          <div className="ticket-title">Title</div>
          <div className="ticket-description medium">description</div>
          <div className="ticket-type medium">type</div>
          <div className="ticket-severity small">severity</div>
          <div className="ticket-status small">status</div>
          <div className="ticket-devs">Links</div>
        </div>
        {projectTicket.map((project) => {
          const { id } = project;
          return <Ticket key={id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

export default SingleProjectPage;
