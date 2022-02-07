// import Book from "../models/Book.js";
const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

exports.getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findOne({_id: id});

        res.status(200).json(book);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

exports.editBook = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const book = await Book.findOne({_id: id});

        book.title = body.title;
        book.author = body.author;
        book.credits = body.credits;
        book.image = req.file.originalname || book.image;

        await book.save()
        res.status(200).json({msg: 'success'});;
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

exports.createBook = async (req, res) => {
    const body = req.body;
    console.log(req.file, req.body);
    const newBook = new Book();

    newBook.title = body.title;
    newBook.author = body.author;
    newBook.image = req.file.originalname;
    newBook.credits = body.credits;

    try {
        await newBook.save();

        res.status(201).json(newBook);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.deleteOne({_id: id});

        res.status(200).json({msg: 'success'});
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}