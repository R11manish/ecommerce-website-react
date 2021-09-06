import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JVDKYSHnWktqqtkZ5ckdDbZfMeEb2EsOieejjSGDsp0XKwu7E1Nhr3QrcZAxohpCytcfwKmdGllqTwEhRlRN67k00WZJeD4y3';

  const onToken = (token) => {
    axios
      .post('/payment', {
        amount: priceForStripe,
        token: token,
      })
      .then((response) => {
        console.log(response);
        alert('payment successfull');
      })
      .catch((error) => {
        console.log('payement error', error.message);
        alert(
          'There was an issue with your payement. please make sure your using right credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
