// import express from 'express';
const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/', usersControllers.getUsers);

router.get('/:id', usersControllers.getUser);

router.post('/', usersControllers.postAddUser);

router.put("/:id", usersControllers.editUser);

router.delete("/:id", usersControllers.deleteUser);

router.post('/login', usersControllers.login);

router.post('/register', usersControllers.register);


// // Return User's data
// router.get('/profile', passport.authenticate('jwt', {
//     session: false
// }), (req, res) => {
//     return res.json({
//         user: req.user
//     });
// });
module.exports = router;