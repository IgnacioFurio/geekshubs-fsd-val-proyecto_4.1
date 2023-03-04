const express = ("express")
const router = require('express').Router();

const authController = require('../controllers/authController');
//const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.createUserProfile);
router.post('/login', authController.userLogin);
router.put('/', authController.updateUserProfile);

module.exports = router;