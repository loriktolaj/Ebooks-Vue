import express from 'express';

const router = express.Router();

import { getBooks, getBook, createBook, editBook, deleteBook } from "../controllers/books.js";

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", createBook);

router.put("/:id", editBook);

router.delete("/:id", deleteBook);

export default router;