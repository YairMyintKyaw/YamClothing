import { useContext, useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/firebase.utils";
import FormInput from "../Form-input/Form-input.component";
import Button from "../Button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormField({ ...formField, [name]: value });
  };

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      user.displayName = displayName;
      await createUserDocumentFromAuth(user);
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else if (error.code === "auth/invalid-email") {
        alert("invalid email");
      } else if (error.code === "auth/weak-password") {
        alert("weak password");
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
