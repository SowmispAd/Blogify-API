import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import connectDB from "./src/config/db.js";
import mainRouter from "./src/routes/index.js";
import errorHandler from "./src/middleware/errorHandler.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", mainRouter);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});