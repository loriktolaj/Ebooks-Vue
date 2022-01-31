import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

import dashboardRoutes from "./routes/dashboard.js";
import booksRoutes from "./routes/books.js";
import usersRoutes from "./routes/users.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

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
