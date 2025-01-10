const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());


app.use(
  cors({
    origin: "https://jobportal-1-as4r.onrender.com",  // Ensure no trailing slash
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use("/", adminRouter);


mongoose.connect(process.env.MONGO_URI, {

  connectTimeoutMS: 30000,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
