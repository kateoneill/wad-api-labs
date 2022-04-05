import express from 'express';
import { genres } from './genresData';
import genre from '.genreModel';

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genre);
});

export default router;