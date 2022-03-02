const mongoose = require('mongoose');

const bookContentSchema = mongoose.Schema({
    title: String,
    author: String, 
    content: String
})

const bookContent = mongoose.model("bookContent", bookContentSchema);

module.exports = bookContent;