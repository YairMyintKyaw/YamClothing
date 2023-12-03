import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles";
import { useSelector } from "react-redux";
import { getAllItems, newTotalPrice } from "../../store/cart/cart.selector";
import PaymentForm from "../../Components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(getAllItems);
  const totalPrice = useSelector(newTotalPrice);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${totalPrice}</Total>
      <PaymentForm/>
    </CheckoutContainer>
  );
};

export default Checkout;
