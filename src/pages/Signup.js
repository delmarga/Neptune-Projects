import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signup() {
  return (
    <Container className="login-page">
      <Form className="form-login">
        <h4 className="logo">Get started with Neptune Projects</h4>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstname" />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastname" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Sign Up
        </Button>
        <p className="text-muted account">
          Have an account?
          <Link to="/login" className="login-signup">
            Log In
          </Link>
        </p>
      </Form>
    </Container>
  );
}

export default Signup;
