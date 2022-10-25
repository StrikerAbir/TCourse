import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../Assets/images/online-learning.png'
import './Header.css'
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {

    const [mode, setMode] = useState('dark');
    const handleMode = (m) => {
        setMode(m)
    }

    return (
      <div className="header-container ">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant={mode}
          className={`w-100 h-100 ${mode === "dark" ? "dark" : "light"}`}
        >
          <Container className="pt-2 pb-2">
            <Image style={{ height: "40px" }} src={logo}></Image>
            <Navbar.Brand
              className="ms-lg-2 me-lg-5 m-0 fw-bold spacing bg-hover-primary"
              href="#home"
            >
              <span className="orange-font">T</span>COURSE
            </Navbar.Brand>
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
              <Nav className="me-auto">
                <Nav.Link className="hover me-3" href="#features">
                  Home
                </Nav.Link>
                <Nav.Link className="hover me-3" href="#pricing">
                  Courses
                </Nav.Link>
                <Nav.Link className="hover me-3" href="#pricing">
                  FAQs
                </Nav.Link>
                <Nav.Link className="hover me-3" href="#pricing">
                  Blogs
                </Nav.Link>
              </Nav>
              <Nav className=" align-items-lg-center">
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

                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;