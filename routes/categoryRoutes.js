import express from "express";
import {
  createCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/categoryControllers.js";

const router = express.Router();

// create category
router.post("/", createCategory);

// edit category
router.put("/:categoryId", editCategory);

// delete category
router.delete("/:categoryId", deleteCategory);

// get all categories
router.get("/", getAllCategories);

export default router;
