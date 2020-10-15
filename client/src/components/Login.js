import React, { useContext } from "react";
import { Button, Form, Label } from "semantic-ui-react";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory }from "react-router-dom"

const Login = (props) => {
  const email = useFormInput("test@test.com", "E-mail");
  const password = useFormInput("123456", "password");
  const { handleLogin,authLoading, authErrors } = useContext(AuthContext);
  const history= useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email: email.value, password: password.value }, history );
  };
  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Label color="blue" ribbon>
          E-Mail
        </Label>
        <Form.Input autoFocus {...email} />
        <Label color="blue" ribbon>
          Password
        </Label>
        <Form.Input type="password" {...password} />
        {authLoading ? (
        <Button color="blue" loading>Loading</Button>
        ):(
        <Button color="blue" type="submit">Login</Button>
        )}
      </Form>
    </div>
  );
};
export default Login;
