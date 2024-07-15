const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
dotenv.config();

const app = express();

// Connect Database
connectDB().then((mongooseNode)=>{
  console.log("Connected to MongoDb");
}).catch((err)=>console.log("error connecting to MongoDb",err));

// Init Middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());

// logger middleware
app.use(logger);

// Define Routes
app.use("/api/users", require("./routes/user"));
app.use("/api/students", require("./routes/students"))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
