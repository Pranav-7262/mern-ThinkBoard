import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

// console.log(process.env.MONGO_URI);
const app = express();
connectDB();

app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/api/notes", (req, res) => {
  res.status(200).send("Get all notes");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
