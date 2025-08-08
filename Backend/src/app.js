import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.routes.js';
import helpRoutes from './routes/help.routes.js';
import popupFormRoutes from './routes/popupform.routes.js';
import careerFormRoutes from './routes/careerform.routes.js';


const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://ss-superior-and-associates-frontend.onrender.com',
    'https://sssuperiorassociates.com',
    'https://www.sssuperiorassociates.com'
  ],
  credentials: true
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/contact', contactRoutes);
app.use('/api/help', helpRoutes);
app.use('/api/popupform', popupFormRoutes);
app.use('/api/careerform', careerFormRoutes);


export default app;