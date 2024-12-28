import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config();

const MongoDB_URI = process.env.MONGODB_URI;
console.log(MongoDB_URI);
export const connectDB = async () => {
  console.log(chalk.yellow("Connecting to MongoDB..."));
  try {
    await mongoose.connect(MongoDB_URI, {});
    console.log(chalk.green("MongoDB is connected"));
  } catch (error) {
    console.error(chalk.red(`Error during db connection: ${error.message}`));
    process.exit(1);
  }
};