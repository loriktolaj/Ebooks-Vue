import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';
// import passport from 'passport';
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

// User Register

export const register = async (req, res) => {
    let {
        username,
        email,
        password,
        confirm_password
    } = req.body
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Password does not match."
        });
    }
    User.findOne({username: username}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    });
    User.findOne({email: email}).then(user => {
        if(user){
            return res.status(400).json({
                msg: "Email is already registered."
            });
        }
    });
    let newUser = new User({
        username,
        email,
        password
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now regstered"
                });
            });
        });
    });
}

    // User Login

export const login = async (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if(!user){
            return res.status(404).json({
                msg: "Username is not found!",
                success: false
            });
        }
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                const payload ={
                    _id: user._id,
                    username: user.username,
                    email: user.email
                }
                jwt.sign(payload, process.env.KEY, { 
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: "You are now logged in."
                    })
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect Paswword.",
                    success: false
                });
            }
        });
    });
}