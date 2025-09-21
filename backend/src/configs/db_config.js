import mongoose from "mongoose";
import { errorHandler } from "../utils/errors.js";
const uri = process.env.MONGODB_URI

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    })
    await mongoose.connect(uri + '/movierider');
  } catch (error) {
    errorHandler("DB connection", error, error.message);
  }
}