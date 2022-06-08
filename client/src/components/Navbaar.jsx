import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Navbaar = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "orange" }}>
          Orange challenge
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/items">Items</Nav.Link>
          <Nav.Link href="/" onClick={() => dispatch(logout())}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbaar;
