import express from 'express';
const router = express.Router();
const port = process.env.PORT || '3000'

router.get('/all', (req, res)=>{
    res.send('All Teacher');
})
router.post('/create', (req, res)=>{
    res.send('New Teacher Created');
})
router.put('/update', (req, res)=>{
    res.send('Teacher Updated');
})
router.delete('/delete', (req, res)=>{
    res.send('Student Teacher');
})

export default router;