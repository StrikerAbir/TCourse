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
      <div className="header-container">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant={mode}
          className={`w-100 h-100 ${mode==='dark'?'dark':'light'}`} 
        >
          <Container>
            <Image style={{ height: "40px" }} src={logo}></Image>
            <Navbar.Brand href="#home">TCOURSE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Courses</Nav.Link>
                <Nav.Link href="#pricing">FAQs</Nav.Link>
                <Nav.Link href="#pricing">Blogs</Nav.Link>
              </Nav>
              <Nav className=" align-items-center">
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