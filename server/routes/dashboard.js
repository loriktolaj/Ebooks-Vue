// import express from 'express';
const express = require('express');

const dashboardControllers  = require("../controllers/dashboard.js");
const userAuth = require('../controllers/users').userAuth;
const checkRole = require('../controllers/users').checkRole;

const router = express.Router();

router.get("/",
    userAuth,
    checkRole(["admin"]),
    dashboardControllers.getDashboard);

module.exports = router;