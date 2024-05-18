import React, { useEffect, useState } from "react";
import TraslateCopy from '../components/traslateCopy'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import querys from '../services/indexApi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const data = useSelector(state => state.login.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location}/paymentSuccess`,
      },
      redirect: "if_required"
    })

    if (error && (error?.type === "card_error" || error?.type === "validation_error")) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment status:" + paymentIntent.status);
      window.location.reload()
    } else {
      setMessage("Unexpected State")
    }
    
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form className="payment-form" id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button className="misServicios-btn" disabled={ isLoading } id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : <TraslateCopy copyId="DASHBOARD_BTN_PAGAR"/>}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}