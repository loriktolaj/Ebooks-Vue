// import express from 'express';
const express = require('express');
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser');
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// import cors from 'cors';
const cors = require('cors');
// import dotenv from "dotenv";
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

const dashboardRoutes = require("./routes/dashboard.js");
const booksRoutes = require("./routes/books.js");
const usersRoutes = require("./routes/users.js");

dotenv.config();

const app = express();
app.use(cors());

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/dashboard', dashboardRoutes);
app.use('/books', booksRoutes);
app.use('/users', usersRoutes);

const CONNECTION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch(err => console.log(err.message));
