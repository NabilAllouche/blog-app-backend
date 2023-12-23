import express from "express";
import blogRouter from "./blogRoutes.js";
import bloggerRouter from "./bloggerRoutes.js";
import categoryRouter from "./categoryRoutes.js";

const router = express.Router();

router.use("/blog", blogRouter);
router.use("/blogger", bloggerRouter);
router.use("/category", categoryRouter);

export default router;
