require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./authRoutes');
const userRoutes = require('./user');
const app = express();

const FRONTEND_URL = '*'; 
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ User Service: MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 User Service running on port ${PORT}`));