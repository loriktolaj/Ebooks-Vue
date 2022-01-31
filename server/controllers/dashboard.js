import User from "../models/User.js";
import Book from "../models/Book.js";

export const getDashboard = async (req, res, next) => {
    try {
        const totalUsers = await User.find().countDocuments();
        const totalBooks = await Book.find().countDocuments();

        res.status(200).json({message: 'success', totalUsers: totalUsers, totalBooks: totalBooks });
    } catch(err) {
        res.status(404).json({message: 'error'});
    }
}