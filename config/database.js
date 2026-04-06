import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongoDb = () => {
  mongoose
    .connect(process.env.MONGODB_URL
    )
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

export default mongoDb;
