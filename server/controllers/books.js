// import Book from "../models/Book.js";
const Book = require('../models/Book');
const User = require('../models/User');
const bookContent = require('../models/BookContent');
const { JsonWebTokenError } = require('jsonwebtoken');
const { json } = require('body-parser');


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
    const newBook = new Book();

    newBook.title = body.title;
    newBook.author = body.author;
    newBook.image = req.file.originalname;
    newBook.credits = body.credits;
    // newBook.bookContent = body.contentId;
    try {
        await newBook.save();

        res.status(201).json(newBook);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}


exports.createBookContent = async (req, res) => {
    const body = req.body;
    const newBook = new bookContent();

    newBook.title = body.title;
    newBook.author = body.author;
    newBook.content = body.content;
    // newBook.bookContent.title = newBook.title;
    // newBook.bookContent.author = newBook.author;
    // newBook.bookContent.content = body.content;
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




exports.buyBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        const bookCreds = book.credits;

        const userId = req.params.userid;
        const user = await User.findById(userId);
        const userCreds = user.credits;
        
        let creditAfterPurchase = 0;

        if(bookCreds === 0 || userCreds < bookCreds){
          return res.status(400).json({
              message: "You don't have enough credits"
          })
        }else{
            creditAfterPurchase = userCreds - bookCreds;
            user.credits = creditAfterPurchase;
            user.bookContent.push(book);
            
            await user.save();
        }

        return res.status(200).json({
            message: "UserCreds: " + userCreds + " BookCreds: " + bookCreds + "  after "+ creditAfterPurchase
        })
        
    }catch(error){
        return res.status(404).json({message: error.message});
    }
}
