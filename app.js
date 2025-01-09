const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const cors =require("cors")
const adminRouter=require("./routes/admin")
const mongoose=require("mongoose")
require('dotenv').config();

// Middleware to parse JSON request bodies
app.use(express.json());



app.use(cors({
  origin: 'https://jobportal-1-as4r.onrender.com/',
  methods: ['GET', 'POST',"DELETE"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/", adminRouter)

mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
