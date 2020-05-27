import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const axios = require("axios");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/api/v1/users/login", data)
      .then((res) => {
        console.log(res);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <Container className="login-page">
      <Form className="form-login" onSubmit={handleSubmit}>
        <h4 className="logo">Neptune Projects Login</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
