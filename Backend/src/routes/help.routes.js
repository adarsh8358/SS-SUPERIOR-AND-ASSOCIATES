import express from 'express';
import helpController from '../controllers/help.controller.js';

const router = express.Router();

router.post('/', helpController.createHelp);

export default router;