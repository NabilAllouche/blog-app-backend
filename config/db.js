import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DATABASE_URI);
    console.log(`DataBase connected successfully`);
  } catch (e) {
    console.log("DataBase error : ", e);
  }
};

export default connectDB;
