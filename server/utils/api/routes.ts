import express from 'express';
import { dirChecker } from '../lib/dirChecker';
import uploader from './ImageUploader';

const router = express.Router();

router.post('/upload', uploader);

export default router;
