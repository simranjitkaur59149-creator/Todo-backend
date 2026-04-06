import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoDb from "./config/database.js";
import routes from "./routes/todoRoutes.js";
const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();
mongoDb();
app.use(
  cors({
    origin: "http://todos-fronted.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/app", routes);
app.listen(PORT, () => console.log("Server is running"));
