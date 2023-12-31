import express from "express";
import dotenv from "dotenv";
import apiRouter from "./routes/api.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://nabil-blog-app.netlify.app",
  ],
  credentials: true,
};

// connect to database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies
app.use(cors(corsOptions)); // Enable CORS

// Define all routes by api router
app.use("/v1", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
