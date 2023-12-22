import express from "express";
import exampleRouter from "./exampleRoutes.js";

const router = express.Router();

router.use("/example", exampleRouter);

export default router;
