import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser,updateUserProfile } = useContext(AuthContext);
 const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(null);
        handleUpdateProfile(name, photoURL);
        navigate('/')
        window.location.reload();
        // handleEmailVerification();
        // toast.success("Please verify your email address. Then Login.",{duration:5000});
      })
      .catch((err) => {
        console.error("error", err);
        setError(err.message);
      });
    
     const handleUpdateProfile = (name, photoUrl) => {
       const profile = { displayName: name, photoURL: photoUrl };
       updateUserProfile(profile)
         .then(() => {})
         .catch((error) => console.error("error", error));
     };
    //  const handleEmailVerification = () => {
    //    verifyEmail()
    //      .then(() => {})
    //      .catch((error) => console.error(error));
    //  };
  }
  

  
  return (
    <div className="container-login">
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="login-title">
          <h2>Register</h2>
        </div>
        <Form className="form ms-3 me-3" onSubmit={handleSubmit}>
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
          {error !== null && (
            <Form.Group className="mb-3 orange-border">
              <Form.Text className="text-danger ">{error}</Form.Text>
            </Form.Group>
          )}

          <button type="submit" className="orangeBtn mb-4 w-100">
            Register
          </button>
          <div>
            <p className="text-white">
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
