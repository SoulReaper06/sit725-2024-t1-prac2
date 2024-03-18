const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the calculator API');
});

app.get('/addTwoNumbers', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

app.get('/multiplyTwoNumbers', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log('Server is listening at http://localhost:3000');
});
