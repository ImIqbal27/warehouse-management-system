import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">

            <h2 className='warehouse'>
              WareHouse
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link as={Link} to="about">About</Nav.Link> */}
              {
                user && <>
                  {/* <Nav.Link as={Link} to="addservice">Add</Nav.Link> */}
                  <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                  <Nav.Link as={Link} to="addproduct">Add</Nav.Link>
                  <Nav.Link as={Link} to="my-item">My product</Nav.Link>
                </>
              }
              {
                user ?
                  <button className='btn text-white' onClick={handleSignOut}>Logout</button>
                  :
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default Header;