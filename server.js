const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');  // Import cors

const app = express();

// Connect DB
connectDB();

// Middleware to read form-data
app.use(express.json({ extended: false }));

// CORS options for specific origin or wildcard (*)
const corsOptions = {
  origin: 'https://mygame-neon.vercel.app/', // Replace with your actual frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers your frontend will send
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Define Routes here
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/history', require('./routes/history'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) 
  );
}

// Declare port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
