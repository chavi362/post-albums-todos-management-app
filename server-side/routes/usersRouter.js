const express = require("express");
const router = express.Router();
const controller = require('../controllers/toysController')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));
const { } = require('../DB')