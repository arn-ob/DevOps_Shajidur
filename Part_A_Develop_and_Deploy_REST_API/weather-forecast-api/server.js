require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors');

// routes
const api_routes = require('./routes/api');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', api_routes);

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the Weather Data API'});
})

app.listen(process?.env?.PORT || 3000, () => {
  console.log(`Running Weather Data API on port ${process?.env?.PORT || 3000}`);
})

// Export the app for testing purposes
module.exports = app; 