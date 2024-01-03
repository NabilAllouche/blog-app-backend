import express from "express";
import {
  createBlog,
  editBlog,
  deleteBlog,
  getAllBlog,
  getBlogByCategoryId,
  getBlogsByBloggerId,
  getBlogById,
} from "../controllers/blogControllers.js";

import { upload } from "../config/firebase.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// create blog
router.post("/", upload.single("filename"), createBlog);

// edit blog
router.put("/:blogId", authMiddleware, editBlog);

// delete blog
router.delete("/:blogId", authMiddleware, deleteBlog);

// get all blogs
router.get("/allBlogs", getAllBlog);

// get blog by id
router.get("/BlogById/:blogId", getBlogById);

// get blog by category
router.get("/blogsByCategory/:categoryId", getBlogByCategoryId);

// get blogger's blog
router.get("/blogsByBloggerId/:bloggerId", authMiddleware, getBlogsByBloggerId);

export default router;
