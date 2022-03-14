const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Book = require('../models/Book');
const User = require('../models/User');


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id});

        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


exports.editUser = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const user = await User.findOne({_id: id});

        user.email = body.email;
        user.password = body.password;
        user.credits = body.credits;
        user.role = body.role;

        if(body.password.includes('$2a$') && body.password.length === 60) {
            user.password = body.password;

            await user.save();
            
            res.status(200).json({msg: 'success'});
        } else {
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                user.password = hash;

                user.save().then(() => {
                    res.status(200).json({msg: 'success'});
                });
            });
        }
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

exports.postAddUser = async (req, res) => {
    const body = req.body;
    const newUser = new User();

    newUser.username = body.username;
    newUser.email = body.email;
    newUser.credits = body.credits;
    newUser.role = body.role;

    try {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            newUser.password = hash;

            newUser.save().then(() => {
                res.status(201).json(newUser);
            });
        });
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.deleteOne({_id: id});

        res.status(200).json(user);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}


// User Register

exports.register = async (req, res) => {
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
        password,
        role : 'user'
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

exports.login = async (req, res) => {
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
                    email: user.email,
                    role: user.role
                }
                jwt.sign(payload, process.env.KEY, { 
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user: user,
                        token: `Bearer ${token}`,
                        msg: "You are now logged in."
                    })
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect Password.",
                    success: false
                });
            }
        });
    });
}

exports.getUserBooks = async (req,res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id});
        // const books = await Book.find();
        const books = await Book.find().where('_id').in(user.bookContent).exec();
        return res.status(200).json(books);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


exports.userAuth = passport.authenticate("jwt", { session: false });

// exports.userAuth = passport.authenticate("jwt", {
//     session: false 
// }), (req,res) => {
//     return res.json({
//         user: req.user
//     });
// };

exports.checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();