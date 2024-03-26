import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //db already connected, dont connect again
  if (connected) {
    return;
  }

  //connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
