import mongoose from 'mongoose';

const popupFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  agree: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('PopupForm', popupFormSchema);