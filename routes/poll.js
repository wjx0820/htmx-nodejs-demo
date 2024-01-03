import express from 'express';

const router = express.Router();

// 存储每个客户端的 counter
const counters = {};

router.get('/poll', (req, res) => {
  const clientId = req.query.clientId;
  
  // 可以打开多个窗口，每个窗口都会有一个 clientId，counter是独立的
  // console.log('clientId', clientId)

  if (!counters[clientId]) {
    counters[clientId] = 0; // 初始化该客户端的 counter
  }

  const data = { value: counters[clientId]++ };

  res.json(data)
});


export default router;