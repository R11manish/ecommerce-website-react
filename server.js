const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: './config.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log('server running on : ' + port);
});

app.post('/payment', async (req, res) => {
  console.log(req.body);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    description: 'a cloths for daily usuage. ',
    currency: 'usd',
  };

  await stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.log(stripeErr);
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
