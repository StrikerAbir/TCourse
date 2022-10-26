import React, { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../Assets/images/online-learning.png'
import './Header.css'
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    console.log(user);
    const [mode, setMode] = useState('dark');
    const handleMode = (m) => {
        setMode(m)
    }
     const activeStyle = {
       border: "2px solid #f5a425",
    };
    
    const handleLogOut = () => {
      logOut();
    };

    return (
      <div className="header-container ">
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`w-100 h-100 ${
            mode === "dark" ? "dark light-font" : "light dark-font"
          }`}
        >
          <Container className="pt-2 pb-2">
            <Image style={{ height: "40px" }} src={logo}></Image>
            <div
              className=" bebas-font ms-lg-3 me-lg-5 m-0 fw-bold spacing bg-hover-primary"
              to="/"
            >
              <Link
                className={`name ${
                  mode === "dark" ? "light-font" : "dark-font"
                }`}
                to="/"
              >
                <span className="orange-font">T</span>COURSE
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-lg-none">
                {mode === "dark" ? (
                  <div
                    className="text-light me-3"
                    onClick={() => handleMode("light")}
                  >
                    <FaSun></FaSun>
                  </div>
                ) : (
                  <div className="me-3" onClick={() => handleMode("dark")}>
                    <FaMoon></FaMoon>
                  </div>
                )}
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto nav-a">
                <NavLink
                  className={`me-lg-3 mt-3 mt-lg-0 ${
                    mode === "dark" ? "light-font" : "dark-font"
                  }`}
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
                <NavLink
                  className={`me-lg-3 ${
                    mode === "dark" ? "light-font" : "dark-font"
                  }`}
                  to="/courses"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Courses
                </NavLink>
                <NavLink
                  className={`me-lg-3 ${
                    mode === "dark" ? "light-font" : "dark-font"
                  }`}
                  to="/faqs"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  FAQs
                </NavLink>
                <NavLink
                  className={`me-lg-3 ${
                    mode === "dark" ? "light-font" : "dark-font"
                  }`}
                  to="/blogs"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Blogs
                </NavLink>
              </Nav>
              <Nav className=" align-items-lg-center nav-a">
                <div className="d-none d-lg-block">
                  {mode === "dark" ? (
                    <div
                      className="text-light me-3"
                      onClick={() => handleMode("light")}
                    >
                      <FaSun></FaSun>
                    </div>
                  ) : (
                    <div className="me-3" onClick={() => handleMode("dark")}>
                      <FaMoon></FaMoon>
                    </div>
                  )}
                </div>

                <>
                  {user?.uid ? (
                    <div className="d-lg-flex align-items-center">
                      <div>
                        <span className="me-1">{user?.displayName}</span>
                        <Link
                          to="/profile"
                          title={user?.displayName}
                        >

                          {user?.photoURL ? (
                            <Image
                              style={{ height: "30px" }}
                              roundedCircle
                              src={user.photoURL}
                            ></Image>
                          ) : (
                            <FaUser></FaUser>
                          )}
                        </Link>
                      </div>
                      <Link
                        onClick={handleLogOut}
                        className={`${
                          mode === "dark" ? "light-font" : "dark-font"
                        }`}
                        to="/login"
                      >
                        Logout
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        className={`${
                          mode === "dark" ? "light-font" : "dark-font"
                        }`}
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        className={`${
                          mode === "dark" ? "light-font" : "dark-font"
                        }`}
                        to="/register"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;