import express from 'express';

const router = express.Router();

let currentTemperature = 20;

router.get('/get-temperature', (req, res) => {
  currentTemperature += Math.random() * 2 - 1; // Random temp change
  res.send(currentTemperature.toFixed(1) + '°C');
});

export default router;