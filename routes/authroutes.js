const express = require('express');
const router = express.Router();

// Import controller functions
const { register, login } = require('../controllers/authController'); // Import the functions from the controller

// Define routes
router.post('/register', register);
router.post('/login', login);

// Export the router
module.exports = router;
