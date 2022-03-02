const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    image: String,
    credits: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;