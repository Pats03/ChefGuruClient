const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const shopifyRoutes = require('./routes/shopifyRoutes'); // Shopify routes
const authRoutes = require('./routes/authroutes'); // Auth routes
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

// Middleware for logging requests (only in development mode)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Define route prefixes
app.use('/api/v1/shopify', shopifyRoutes); // Shopify routes under '/v1/shopify'
app.use('/api/v1/auth', authRoutes); // Auth routes under '/v1/auth'

// Handle undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Cannot find ${req.originalUrl} on this server!`,
  });
});

// Global error handler (optional, for improved debugging)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  });
});

// Start the server
const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(
    `Server running in ${
      process.env.NODE_ENV || 'production'
    } mode on PORT ${port}...`
  );
});
