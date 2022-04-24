import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function Homepage() {
  const [loadings, setLoadings] = useState(false);
  let navigate = useNavigate();
  const handleLogout = () => {
    setLoadings(true);
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setLoadings(false);
    }, 3000);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {loadings ? (
          <Loading />
        ) : (
          <>
            <Navbar.Brand href="#home">Navbar Todo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav>
                <NavDropdown title="rego" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}
