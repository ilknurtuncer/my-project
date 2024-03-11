// routes/books.js
const express = require("express");
const router = express.Router();
const Book = require("../models/book");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book === null) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new book
router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book === null) {
      res.status(404).json({ message: "Book not found" });
    } else {
      await book.update(req.body);
      res.json(book);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book === null) {
      res.status(404).json({ message: "Book not found" });
    } else {
      await book.destroy();
      res.json({ message: "Book deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
