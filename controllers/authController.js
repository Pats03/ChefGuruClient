const User = require('../models/user.js');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { createJWT } = require('../utils/tokenUtils');
const StatusCodes = require('http-status-codes');

// Register function
const register = async (req, res) => {
  try {
    const { name, email, password: plainPassword } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'User already exists' });
    }

    // Hash the password
    const password = await hashPassword(plainPassword);

    // Create and save the new user
    const user = new User({ name, email, password });
    await user.save();

    res
      .status(StatusCodes.CREATED)
      .json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Invalid credentials' });
    }

    // Compare the password
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = createJWT({ userId: user._id });

    // Set the cookie with the token
    const oneDay = 1000 * 60 * 60 * 24; // 24 hours
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    });

    res.status(StatusCodes.OK).json({ msg: 'User logged in successfully' });
  } catch (error) {
    console.error('Error during login:', error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

module.exports = { register, login };
