import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price}) => {
  console.log(price);
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JwjcHINlvdlfUZ8FTtWXt4mPacpV6jqryp87tw0Ap8EXRi3Mc3iZJbr3V6W5Vo9t7ipeubEGRGIOL5gHYIfjJ3g00WUJLVD4N';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
     label='Pay now'
     name='CRWN Clothing Ltd.'
     billingAddress
     shippingAddress
     image={<Logo/>}  
     description={`Your total is $${price}`}
     amount={priceForStripe}
     paneLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     />
 );
};

export default StripeCheckoutButton;
