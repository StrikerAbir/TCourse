import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-login">
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="login-title">
          <h2>Register</h2>
        </div>
        <Form className="form ms-3 me-3">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control name="name" type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control name="photoURL" type="text" placeholder="Photo_URL" />
          </Form.Group>
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
            Register
          </button>
          <div>
            <p className="text-white">
              Already Registered? <Link to='/login'>Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
