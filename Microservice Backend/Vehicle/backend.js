require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const vehicleRoutes = require('./vehicleroutes');
const authMiddleware = require('../Login/authMiddleware');
const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Vehicle Service: MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.use('/api/vehicles', authMiddleware, vehicleRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Vehicle Service running on port ${PORT}`));