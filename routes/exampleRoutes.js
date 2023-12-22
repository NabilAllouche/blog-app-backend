import express from "express";
const router = express.Router();
import { example } from "../controllers/exampleControler.js";
import { exampleMiddleware } from "../middleware/exampleMiddleware.js";

router.get("/", exampleMiddleware, example);

export default router;
