import express from 'express';
const router = express.Router();
const port = process.env.PORT || '3000'

router.get('/all', (req, res)=>{
    res.send('All Student');
})
router.post('/create', (req, res)=>{
    res.send('New Student Created');
})
router.put('/update', (req, res)=>{
    res.send('Student Updated');
})
router.delete('/delete', (req, res)=>{
    res.send('Student deleted');
})



export default router;