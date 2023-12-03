import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";
import { FormContinaer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <PaymentFormContainer>
      <FormContinaer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContinaer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;