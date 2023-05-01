import SignInForm from "../../Components/Sign-in-form/sign-in-form.component";
import SignUpForm from "../../Components/Sign-up-form/sign-up-form.component";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
