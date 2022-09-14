import Wrapper from "../assests/wrappers/AboutPage";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <h1>Welcome to Zapper!</h1>
        <br />
        <p className="paragraph">
          Zapper has many features to aid in the tracking of bugs in software.
          It allows companies to start new projects and add personel to a
          specific project. Each project has tickets that developers are
          assigned to fix. The individual tickets have comment sections allowing
          input from the developers on the issue.
        </p>
        <br />
        <p className="paragraph">
          The Application is built using React, Node.js, and a PostgreSQL
          database. The developement was completed using Visual Studio Code.
        </p>
        <br />
        <h2>Roles</h2>
        <p className="paragraph">
          Zapper has three roles that users can be assigned to. Users are
          automatically placed as a developer role upon registration.
        </p>
        <br />
        <p className="paragraph">
          Here is a breif description of the permissions of each role:
        </p>
        <br />
        <h3>Developer</h3>
        <ul>
          <li>Create Project</li>
          <li>Create Ticket</li>
          <li>Delete projects and tickets they created</li>
          <li>Edit and view projects and tickets they are assigned to</li>
          <li>Update their own user information</li>
          <li>Comment on all Tickets</li>
        </ul>
        <br />
        <h3>Project Manager</h3>
        <ul>
          <li>Add developers to projects and tickets</li>
          <li>All developer permissions</li>
        </ul>
        <br />
        <h3>Admin Role</h3>
        <ul>
          <li>Access to administration page</li>
          <li>Assign users to roles</li>
          <li>View and edit all tickets and projects</li>
          <li>Create and delete all tickets and projects</li>
          <li>All project managers permissions</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
