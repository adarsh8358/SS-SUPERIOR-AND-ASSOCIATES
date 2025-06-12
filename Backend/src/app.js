import express from 'express';
import contactRoutes from './routes/contact.routes.js';
import cors from 'cors';
import helpRoutes from './routes/help.routes.js';


const app = express();


app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());


// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/help', helpRoutes);


export default app;