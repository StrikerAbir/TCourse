import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const { providerLogin, signIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error("error", err);
      });
  }

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
      .catch(err => {
        console.error('error', err);
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(null);
        // if (user.emailVerified) {
        //   navigate(from, { replace: true });
        // } else {
        //   toast.error("Your email is not verified. Please varify email");
        // }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      // .finally(() => {
      //   setLoading(false);
      // });
  }
  return (
    <div className="container-login">
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <Form className="form ms-3 me-3" onSubmit={handleSubmit}>
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
          {error !== null && (
          <Form.Group className="mb-3">
            <Form.Text className="text-danger">{error}</Form.Text>
          </Form.Group>
        )}

          <button type="submit" className="orangeBtn mb-4">
            Login
          </button>
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-3">
              <Button
                  onClick={handleGoogleSignIn}
                className="mb-3 mb-lg-0"
                variant="outline-light"
              >
                <FaGoogle></FaGoogle> Login with Google
              </Button>
              <Button
                  onClick={handleGithubSignIn}
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
