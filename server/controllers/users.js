import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id});

        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const editUser = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const user = await User.findOne({_id: id});

        user.email = body.email;
        user.password = body.password;
        user.credits = body.credits;

        await user.save();
        res.status(200).json({msg: 'success'});
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const postAddUser = async (req, res) => {
    const body = req.body;
    const newUser = new User(body);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.deleteOne({_id: id});

        res.status(200).json(user);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}