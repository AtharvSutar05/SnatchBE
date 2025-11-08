import express from 'express';
import { getLatestVersion } from '../controllers/version.controller.js';
import { get } from 'mongoose';

const router = express.Router();

router.get('/', getLatestVersion);

export default router;