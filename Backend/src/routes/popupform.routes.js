import express from 'express';
import PopupForm from '../models/popupform.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, mobile, email, message, agree } = req.body;
    if (!name || !mobile || !email || !message || !agree) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const popupForm = new PopupForm({ name, mobile, email, message, agree });
    await popupForm.save();
    res.json({ message: 'Form received!' });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Server error.' });
  }
});

export default router;