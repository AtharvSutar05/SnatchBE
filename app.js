import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import roomRoutes from './routes/room.routes.js';
// import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
// connectDB();

// Routes
app.use('/room', roomRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Snatch Backend API is running');
});

export default app;
