import express from "express";
import {
  bloggerRegistre,
  bloggerLogin,
  bloggerLogout,
} from "../controllers/bloggerControllers.js";
import { upload } from "../config/firebase.js";

const router = express.Router();

// blogger registre
router.post("/register", upload.single("filename"), bloggerRegistre);

// Blogger Login
router.post("/login", bloggerLogin);

// Blogger Logout
router.post("/logout", bloggerLogout);

export default router;
