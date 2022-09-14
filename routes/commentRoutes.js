import express from "express";
const router = express.Router();

import {
  createComment,
  getAllCommentOnTicket,
  editComment,
  deleteComment,
} from "../contollers/comment.js";

router
  .route("/:id")
  .post(createComment)
  .get(getAllCommentOnTicket)
  .patch(editComment)
  .delete(deleteComment);

export default router;
