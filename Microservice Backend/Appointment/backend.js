require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const appointmentRoutes = require('./appointments');
const authMiddleware = require('./authMiddleware');
const app = express();

const FRONTEND_URL = 'http://10.109.140.171'; // Replace with your frontend URL
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Appointment Service: MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.use('/api/appointments', authMiddleware, appointmentRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🚀 Appointment Service running on port ${PORT}`));