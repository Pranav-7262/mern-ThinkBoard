import express from "express";
import Note from "../model/Note.js";
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //fetch all notes from database and sort by createdAt in descending order
    res.status(200).json(notes); //send all notes as JSON response
  } catch (error) {
    console.log("Error fetching notes:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote); //send the saved note as JSON response
  } catch (error) {
    console.log("Error creating note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    }); //find note by id and update
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error updating note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const deleteNotes = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      res.status(404).json({ message: "Note not found" });
      return;
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error deleting note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    console.log("Error deleting note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
