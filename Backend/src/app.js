import express from 'express';
import contactRoutes from './routes/contact.routes.js';
import cors from 'cors';
import helpRoutes from './routes/help.routes.js';


const app = express();

// Enable CORS for all origins (or specify origin if you want)
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

app.use(cors({
  origin: ['https://sssuperiorassociates.com', 'https://www.sssuperiorassociates.com'],
  credentials: true
}));

app.use(express.json());


// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/help', helpRoutes);


export default app;