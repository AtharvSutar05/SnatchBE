import express from 'express';
import { createMeeting, joinRoom } from '../controllers/room.controller.js';

const router = express.Router();

router.post('/create', createMeeting);
router.post('/join', joinRoom);

export default router;
