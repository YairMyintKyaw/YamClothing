import styled from "styled-components";
import Button from "../Button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContinaer = styled.form`
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
