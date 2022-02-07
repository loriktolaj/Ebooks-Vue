// import express from 'express';
const express = require('express');
const passport = require('passport');

const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/', usersControllers.getUsers);

// Return User's data
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/:id', usersControllers.getUser);

router.post('/', usersControllers.postAddUser);

router.put("/:id", usersControllers.editUser);

router.delete("/:id", usersControllers.deleteUser);

router.post('/register', usersControllers.register);

router.post('/login', usersControllers.login);



module.exports = router;