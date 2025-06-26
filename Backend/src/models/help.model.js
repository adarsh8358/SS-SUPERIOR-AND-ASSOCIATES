import mongoose from 'mongoose';

const helpSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
}, {timestamps: true});

export default mongoose.model('Help', helpSchema);