import express from 'express';
import { getmovies, createmovies } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getmovies);

router.post('/', createmovies);

export default router;