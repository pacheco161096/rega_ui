import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { redirect } from "react-router-dom";
const stripePromise = loadStripe("pk_test_51MgUlTFyBKymnnM6dGT3LSsU9XWYyuza2ZnZKyDekBKQDPyy0BRAcSAoFxFkd7fb43Ni73wQZplHOBVVF9xntvyP00CcnuijYK")

const PaymentSuccess = () => {
  
  return(<div>tanks</div>)
}

export default PaymentSuccess;