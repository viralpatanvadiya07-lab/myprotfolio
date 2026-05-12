const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI && MONGO_URI !== 'your_mongodb_connection_string') {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));
} else {
  console.log('⚠️ MONGO_URI not configured. Database features will not work.');
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
