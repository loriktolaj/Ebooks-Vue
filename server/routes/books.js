// import express from 'express';
const express = require('express');
const multer = require('multer');
const router = express.Router();

// import { getBooks, getBook, createBook, editBook, deleteBook } from "../controllers/books.js";
const booksController = require('../controllers/books');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ dest: 'images', storage: fileStorage })

router.get("/", booksController.getBooks);

router.get("/:id", booksController.getBook);

router.post("/", upload.single('image'), booksController.createBook);

router.put("/:id", upload.single('image'), booksController.editBook);

router.delete("/:id", booksController.deleteBook);

module.exports = router;