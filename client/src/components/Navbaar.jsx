import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { logout } from "../redux/actions/authActions";
import {useNavigate, Link} from 'react-router-dom'
const Navbaar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/items">Items</Nav.Link>
          <Link to={"/"}>
            {" "}
            <Nav.Link onClick={() => dispatch(logout()) && navigate('/')}>Logout</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbaar;
