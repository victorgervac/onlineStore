import React, { useState, useContext } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useFormInput } from "../customHooks/useFormInput";

const Register = (props) => {
  const email = useFormInput("", "E-mail");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input {...email} />
        <br />
        <input {...password} />
        <br />
        <input {...passwordConfirmation} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
