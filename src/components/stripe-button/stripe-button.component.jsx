import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JKLrmSIXmHZ1XhJ1h30wA1kmt0NEFKAotS2lvfTg0b4p2aa9PhxjLpdY05vuL22YAuD0RqmxD8farMYOdTS0qK000vxLraA1u';

  const onToken = (token) => {
    console.log(token);
    alert('payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN clothing Ltd'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
