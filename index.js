import express from "express";
import cors from "cors";
import mainRouter from "./src/routes/index.js";

const app = express();
const PORT = 3000;
app.use(express.json());

// Global Middleware
app.use(cors());


// Versioned API Mount
app.use("/api/v1", mainRouter);

// Central Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});