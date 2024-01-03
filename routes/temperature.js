import express from 'express';

const router = express.Router();

router.post('/convert', (req, res) => {
  setTimeout(() => {
    const fahrenheit = parseFloat(req.body.fahrenheit);
    const celsius = (fahrenheit - 32) * (5 / 9);

    res.send(`
      <p>
        ${fahrenheit} degrees Farenheit is equal to ${celsius} degrees Celsius
      </p>
    `);
  }, 1000);
});

export default router;