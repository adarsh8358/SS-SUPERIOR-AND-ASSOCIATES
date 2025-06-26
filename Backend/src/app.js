import express from 'express';
import contactRoutes from './routes/contact.routes.js';
import cors from 'cors';
import helpRoutes from './routes/help.routes.js';


const app = express();


// app.use(cors({
//   origin: ['http://localhost:3000',
//     'http://localhost:5173',
//     'https://ss-superior-and-associates-frontend.onrender.com',
//     'https://sssuperiorassociates.com/',
//     'https://www.sssuperiorassociates.com/',
//     "sssuperiorassociates.com",
//     "www.sssuperiorassociates.com"],

//   credentials: true
// }));

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


app.use(express.json());


// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/help', helpRoutes);


export default app;