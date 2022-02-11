// import express from 'express';
const express = require('express');
const passport = require('passport');
const router = express.Router();
const usersControllers = require('../controllers/users');


router.get('/', 
    usersControllers.userAuth,
    usersControllers.checkRole(["admin"]),
    usersControllers.getUsers
);

router.get("/profile", usersControllers.userAuth, async (req, res) => {
    return res.json({
        user: req.user
    });
  });

router.get('/:id', 
    usersControllers.userAuth,
    usersControllers.checkRole(["admin"]),
    usersControllers.getUser
);

router.post('/',
    usersControllers.userAuth,
    usersControllers.checkRole(["admin"]),
    usersControllers.postAddUser
);

router.put("/:id",
    usersControllers.userAuth,
    usersControllers.checkRole(["admin"]),
    usersControllers.editUser
);

router.delete("/:id",
    usersControllers.userAuth,
    usersControllers.checkRole(["admin"]), 
    usersControllers.deleteUser
);

router.post('/register', usersControllers.register);

router.post('/login', usersControllers.login);



module.exports = router;