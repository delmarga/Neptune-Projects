import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <Container className="login-page">
      <Form className="form-login">
        <h4 className="logo">Neptune Projects Login</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Login
        </Button>
        <p className="text-muted account">
          Don't have an account?
          <Link to="/signup" className="login-signup">
            Sign Up
          </Link>
        </p>
      </Form>
    </Container>
  );
}

export default Login;
