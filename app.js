const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const adminRouter = require("./routes/admin"); // Ensure this file exists and has the routes properly set up

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: ["https://jobportal-1-as4r.onrender.com"], // Replace with your frontend URL
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Event listeners for MongoDB
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("Mongoose disconnected. Retrying...");
});

// Routes
app.use("/", adminRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack || err);
  res.status(500).json({ message: "Internal server error", error: err.message || err });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
