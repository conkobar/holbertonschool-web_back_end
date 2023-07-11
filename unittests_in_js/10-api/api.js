// create an express app
const express = require('express');
const app = express();

app
  .get('/', (req, res) => {
    res.send('Welcome to the payment system');
  })
  .get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
      res.status(404).send('id must be a number');
    } else {
      res.send(`Payment methods for cart ${id}`);
    }
  })
  .get('/available_payments', (req, res) => {
    res.json({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    });
  })
  .post('/login', (req, res) => {
    const userName = req.body.userName;
    res.send(`Welcome ${userName}`);
  })
  .listen(7865, () => {
    console.log('API available on localhost port 7865');
  });

module.exports = app;
