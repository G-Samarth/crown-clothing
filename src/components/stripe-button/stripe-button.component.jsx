import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HIY14EOiTuzlKhB6y3MJOuAP1PAvc3Ydno6RR3IeQvGBUiXtOJQ8bg754HSBAWumCfkd3HdNlm3EyClWxwViSgW00Znj36ku0';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return(
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;