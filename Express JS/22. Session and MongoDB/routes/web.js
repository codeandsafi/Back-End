import express from 'express';
const router = express.Router()
import StudentController from '../controllers/studentController.js';


router.get('/getsessioninfo', StudentController.get_session_info);
router.get('/deletesession', StudentController.delete_session);
router.get('/regnsession', StudentController.regenerate_session);
router.get('/examplesession', StudentController.session_example);

export default router;