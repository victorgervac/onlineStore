import React, { useState, useContext } from "react";
import { Button, Form, Label, Segment } from "semantic-ui-react";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom"

const Register = (props) => {
  const email = useFormInput("test@test.com", "E-mail");
  const password = useFormInput("123456", "Password");
  const passwordConfirmation = useFormInput("123456", "Password Confirmation");

  const { handleRegister } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
      alert("Passwords do not match");
    } else {
      handleRegister({
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      },
      history 
      );
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <Label color="blue" ribbon>
            E-MAIL
          </Label>
          <Form.Input autoFocus {...email} />
        </div>
        <br />
        <Label color="blue" ribbon>
          PASSWORD
        </Label>
        <Form.Input type="password" {...password} />
        <br />
        <Label color="blue" ribbon>
          PASSWORD CONFIRMATION
        </Label>
        <Form.Input type="password" {...passwordConfirmation} />
        <br />
        <Button color="green" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
export default Register;
