import express from "express";
const router = express.Router();

import {
  getAllProjects,
  getSingleProject,
  editProject,
  deleteProject,
  createProject,
  getDevsOnProject,
} from "../contollers/projectController.js";

router.route("/").get(getAllProjects).post(createProject);
router.route("/devs/:id").get(getDevsOnProject);
router
  .route("/:id")
  .patch(editProject)
  .delete(deleteProject)
  .get(getSingleProject);

export default router;
