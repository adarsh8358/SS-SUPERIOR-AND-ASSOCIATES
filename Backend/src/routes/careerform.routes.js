import express from 'express';
import CareerForm from '../models/careerform.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, mobile, email, message, agree } = req.body;
    if (!name || !mobile || !email || !message || !agree) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const careerForm = new CareerForm({ name, mobile, email, message, agree });
    await careerForm.save();
    res.json({ message: 'Application received!' });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Server error.' });
  }
});

export default router;