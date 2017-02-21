import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
  res.send({data:[]});
});

router.get('/you',(req,res) => {
  res.send('you');
});

export default router;
