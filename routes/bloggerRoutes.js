import express from "express";
import {
  bloggerRegistre,
  bloggerLogin,
  bloggerLogout,
} from "../controllers/bloggerControllers.js";

const router = express.Router();

// blogger registre
router.post("/register", bloggerRegistre);

// Blogger Login
router.post("/login", bloggerLogin);

// Blogger Logout
router.post("/logout", bloggerLogout);

export default router;
