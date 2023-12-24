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

const router = express.Router();

// create blog
router.post("/", createBlog);

// edit blog
router.put("/:blogId", editBlog);

// delete blog
router.delete("/:blogId", deleteBlog);

// get all blogs
router.get("/allBlogs", getAllBlog);

// get blog by id
router.get("/BlogById/:blogId", getBlogById);

// get blog by category
router.get("/blogsByCategory/:categoryId", getBlogByCategoryId);

// get blogger's blog
router.get("/blogsByBloggerId/:bloggerId", getBlogsByBloggerId);

export default router;
