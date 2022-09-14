import Wrapper from "../assests/wrappers/HomePage";
import HomeProject from "../components/HomeProject";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { TiTicket } from "react-icons/ti";

const Home = () => {
  const { projects, fetchProjects, isLoading, fetchTickets, tickets } =
    useAppContext();
  useEffect(() => {
    fetchProjects();
    fetchTickets();
  }, []);

  return (
    <Wrapper>
      <div className="stats-container">
        <div className="stat">
          <div className="stat-amount green">
            {tickets.reduce((total, ticket) => {
              if (ticket.status === "open") {
                return total + 1;
              }
              return total;
            }, 0) || 0}
          </div>
          <div className="icon-container-green">
            <TiTicket className="stat-icon green" />
          </div>
          <h1 className="stat-title">Open Tickets</h1>
        </div>
        <div className="stat">
          <div className="stat-amount blue">
            {tickets.reduce((total, ticket) => {
              if (ticket.severity === "critical") {
                return total + 1;
              }
              return total;
            }, 0) || 0}
          </div>
          <div className="icon-container-blue">
            <TiTicket className="stat-icon blue" />
          </div>
          <h1 className="stat-title">Critical Tickets</h1>
        </div>
        <div className="stat">
          <div className="stat-amount red">
            {tickets.reduce((total, ticket) => {
              if (ticket.type === "security defect") {
                return total + 1;
              }
              return total;
            }, 0) || 0}
          </div>
          <div className="icon-container-red">
            <TiTicket className="stat-icon red" />
          </div>
          <h1 className="stat-title">Security Defects</h1>
        </div>
      </div>
      <div className="main-title">Projects</div>
      <div className="project-container">
        {projects.map((project) => {
          return <HomeProject key={project.id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Home;
