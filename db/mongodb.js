import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    const dbUri = process.env.URI || "mongodb://localhost:27017/movies_home";
    const response = await mongoose.connect(dbUri);
    console.log("connection establish");
  } catch (error) {
    console.log("mongodb connection Error", error);
    process.exit(1);
  }
};

connectDb();

export default connectDb;
