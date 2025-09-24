import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
dotenv.config();

// console.log(process.env.MONGO_URI);
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    Credentials: true,
  })
);

//middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`Req Method: ${req.method}, Req URL: ${req.url}`);
  next();
});

app.use("/api/notes", noteRoutes);

app.get("/api/notes", (req, res) => {
  res.status(200).send("Get all notes");
});
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
