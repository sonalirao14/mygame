const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');  // Import cors

const app = express();

// Connect DB
connectDB();

// Middleware to read form-data
app.use(express.json({ extended: false }));

// Enable CORS
app.use(cors({
 origin: "https://memory-game-essk.onrender.com"
}
));

// Define Routes here
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/history', require('./routes/history'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder here
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // Fixed incorrect path separator
  );
}

// Declare port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
