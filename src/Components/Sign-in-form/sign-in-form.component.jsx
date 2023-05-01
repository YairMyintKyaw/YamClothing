import { useContext, useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../Utils/Firebase/firebase.utils";
import FormInput from "../Form-input/Form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";
import { ButtonContainer, SignUpContainer } from "./sign-in-form.styles";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetForm();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No user associated with this email address");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password for email");
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignUpContainer>
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
        />

        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
