import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../Utils/Firebase/firebase.utils";
import SignUpForm from "../../Sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUserPopup}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
