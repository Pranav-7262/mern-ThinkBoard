import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Note = mongoose.model("Note", noteSchema); //here "Note" is the name of the collection in MongoDB
export default Note;
