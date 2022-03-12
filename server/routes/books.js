// import express from 'express';
const express = require("express");
const multer = require("multer");
const router = express.Router();

// import { getBooks, getBook, createBook, editBook, deleteBook } from "../controllers/books.js";
const booksController = require("../controllers/books");
const userAuth = require("../controllers/users").userAuth;
const checkRole = require("../controllers/users").checkRole;

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "images", storage: fileStorage });

router.get("/client", booksController.getBooks);

router.get("/", userAuth, checkRole(["admin"]), booksController.getBooks);

router.get("/:id", booksController.getBook);

router.post("/", upload.single("image"), booksController.createBook);

router.post("/bookcontent", booksController.createBookContent);

router.post("/creds/:id/:userid", userAuth, booksController.buyBook);

router.put("/:id", upload.single("image"), booksController.editBook);

router.delete(
  "/:id",
  userAuth,
  checkRole(["admin"]),
  booksController.deleteBook
);

module.exports = router;
