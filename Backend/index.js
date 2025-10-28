import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json()); 
dotenv.config();
const PORT=process.env.PORT || 4000;
const URI= process.env.MongoDBURI;

//connect to mongodb

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

connectDB();


//define routes

app.use("/book",bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})