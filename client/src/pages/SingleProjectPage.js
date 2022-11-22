import Wrapper from "../assests/wrappers/SingleProjectPage.js";
import { Link } from "react-router-dom";
import Ticket from "../components/Ticket";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";
import { useEffect } from "react";
import Project from "../components/Project.js";
import ContainedButtons from "../components/Button.js";

const SingleProjectPage = () => {
  let { id: projectId } = useParams();

  const {
    fetchTicketsOnProject,
    fetchSingleProject,
    projectTicket,
    singleProject,
    fetchUsersOnProject,
    devsOnProject,
  } = useAppContext();

  useEffect(() => {
    fetchSingleProject(projectId);
    fetchTicketsOnProject(projectId);
    fetchUsersOnProject(projectId);
  }, []);
  return (
    <Wrapper className="full-page">
      <Project />
      <div className="title-1">
        <h1 className="title-text">Tickets on {singleProject[0]?.title}</h1>
        <Link to={`/addticket/${projectId}`} className="position">
          <ContainedButtons
            name={"Add Ticket"}
            styled={"large"}
          ></ContainedButtons>
        </Link>
      </div>
      <div className="ticket-container">
        <div className="ticket">
          <div className="ticket-title">Title</div>
          <div className="ticket-description medium">description</div>
          <div className="ticket-type medium center">type</div>
          <div className="ticket-severity small center">severity</div>
          <div className="ticket-status small center">status</div>
          <div className="ticket-devs">Links</div>
        </div>
        {projectTicket.length > 0 ? (
          projectTicket.map((ticket) => {
            const { id } = ticket;
            return <Ticket key={id} {...ticket} projectId={projectId} />;
          })
        ) : (
          <h1 className="no-title">No Tickets...</h1>
        )}
      </div>
    </Wrapper>
  );
};

export default SingleProjectPage;
