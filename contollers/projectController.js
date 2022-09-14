import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

const createProject = async (req, res) => {
  const { title, description } = req.body;
  const { id: user_id } = req.user.user;

  if (description.length >= 150) {
    throw new BadRequestError("Description is too Long.");
  }

  const newProject = await db.query(
    "INSERT INTO project(title, description, createdby) VALUES($1, $2, $3) RETURNING *",
    [title, description, user_id]
  );

  res.status(StatusCodes.CREATED).json({ project: newProject.rows });
};
const getAllProjects = async (req, res) => {
  const projects = await db.query(
    "SELECT title, description, user_name, id FROM project JOIN user_account ON project.createdby = user_account.user_id"
  );

  res
    .status(StatusCodes.OK)
    .json({ projects: projects.rows, totalProject: projects.rows.length });
};

const getSingleProject = async (req, res) => {
  const { id } = req.params;

  const project = await db.query("SELECT * FROM project WHERE id = $1", [id]);

  res.status(StatusCodes.OK).json({ project: project.rows });
};

const editProject = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const { id: user_id } = req.user.user;

  const testId = await db.query("SELECT createdby FROM project WHERE id = $1", [
    id,
  ]);

  if (testId.rows[0].createdby != user_id) {
    throw new UnauthenticatedError("You did not create this project!");
  }

  const updatedProject = await db.query(
    "UPDATE project SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  res.status(StatusCodes.OK).json({ project: updatedProject.rows });
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const { id: user_id } = req.user.user;

  const testId = await db.query("SELECT createdby FROM project WHERE id = $1", [
    id,
  ]);

  const ticketDelete = await db.query(
    "SELECT id FROM ticket WHERE project_id = $1",
    [id]
  );
  console.log(ticketDelete.rows);
  if (
    req.user.user.user_role !== "admin" &&
    testId.rows[0].createdby !== user_id
  ) {
    throw new UnauthenticatedError("You did not create this project!");
  }
  // DELETE FROM COMPOSITE TABLE

  await db.query("DELETE FROM ticket_interactions WHERE projectid = $1", [id]);

  await db.query("DELETE FROM comment WHERE projectID = $1", [id]);

  await db.query("DELETE FROM project_interactions WHERE projectid = $1", [id]);
  // DELETE PROJECT
  await db.query("DELETE FROM ticket WHERE project_id = $1", [id]);
  await db.query("DELETE FROM project WHERE id = $1", [id]);

  res.status(StatusCodes.OK).send("Project Deleted!");
};

const getDevsOnProject = async (req, res) => {
  const { id } = req.params;

  const project = await db.query(
    "SELECT project_id FROM ticket WHERE id = $1",
    [id]
  );
  const project_id = project.rows[0].project_id;
  const users = await db.query(
    "SELECT user_name, user_id FROM user_account JOIN project_interactions ON user_account.user_id = project_interactions.userID JOIN project ON project.id = project_interactions.projectID WHERE project.id = $1",
    [project_id]
  );

  res.status(StatusCodes.OK).json({ developers: users.rows });
};

export {
  getAllProjects,
  getSingleProject,
  editProject,
  deleteProject,
  createProject,
  getDevsOnProject,
};
