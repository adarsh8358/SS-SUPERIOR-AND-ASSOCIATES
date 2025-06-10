import Help from '../models/help.model.js';

const createHelp = async (req, res) => {
  try {
    const help = new Help(req.body);
    await help.save();
    res.status(201).json({ message: 'Help request saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save help request.' });
  }
};

export default { createHelp };