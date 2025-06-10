import Contact from '../models/contact.model.js';

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact.' });
  }
};

export default { createContact };