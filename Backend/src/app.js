import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes.js';
import connectDB from './config/db.js';
import cors from 'cors';
import helpRoutes from './routes/help.routes.js';

dotenv.config();

const app = express();

// Enable CORS for all origins (or specify origin if you want)
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/help', helpRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});