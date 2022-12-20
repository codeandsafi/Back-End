import express from 'express';
const router = express.Router();
import { studentController } from '../controllers/studentController.js';
import myLogger from '../middlewares/logger-middlewar.js';

router.use(myLogger)

router.get('/student', studentController)
router.get('/event', (req, res) => {
    res.send('Events')
})

export default router;