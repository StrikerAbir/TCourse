import React from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import cover from "../../Assets/images/courses-bg.jpg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container-login">
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <Form className="form ms-3 me-3">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          {/* {error !== null && (
          <Form.Group className="mb-3">
            <Form.Text className="text-danger">{error}</Form.Text>
          </Form.Group>
        )} */}

          <button type="submit" className="orangeBtn mb-4">
            Login
          </button>
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-3">
              <Button
                //   onClick={handleGoogleSignIn}
                className="mb-3 mb-lg-0"
                variant="outline-light"
              >
                <FaGoogle></FaGoogle> Login with Google
              </Button>
              <Button
                //   onClick={handleGithubSignIn}
                variant="outline-light"
              >
                <FaGithub></FaGithub> Login with GitHub
              </Button>
          </div>
          <div>
            <p className="text-white">
              Not Registered? <Link to="/register">Register</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
