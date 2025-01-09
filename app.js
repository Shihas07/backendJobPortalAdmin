const express = require("express");

const app = express();
const PORT = 3000;
const cors =require("cors")
const adminRouter=require("./routes/admin")
const mongoose=require("mongoose")

// Middleware to parse JSON request bodies
app.use(express.json());



app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST',"DELETE"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/", adminRouter)

mongoose
.connect("mongodb://localhost:27017/JobData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
