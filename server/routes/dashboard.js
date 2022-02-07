// import express from 'express';
const express = require('express');

const dashboardControllers  = require("../controllers/dashboard.js");

const router = express.Router();

router.get("/", dashboardControllers.getDashboard);

module.exports = router;