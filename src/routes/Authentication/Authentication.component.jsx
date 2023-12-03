import SignInForm from "../../Components/Sign-in-form/sign-in-form.component";
import SignUpForm from "../../Components/Sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.styles";
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
