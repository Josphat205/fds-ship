import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Logo from '../images/lg.png'
const NavbarC = () => {
  return (
    <div className="container-fluid">

      <Navbar className="navbar navbar-expand-lg fixed-top  shadow-lg p-3 mb-5 rounded border-bottom bg-color" expand="lg">
      <Container fluid>
        <NavLink className="hero" to="/">
          <img style={{height:'100%',width:'100%',borderRadius:'10px'}} src={Logo} alt="logo"/>
        </NavLink>
        <Navbar.Toggle style={{color:'black'}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <NavLink className="nav-link" style={({ isActive }) => isActive ? {color:'blue'} : {color:'black'}} to='/'>Home</NavLink>
           <NavLink className="nav-link" style={({ isActive }) => isActive ? {color:'blue'} : {color:'black'}} to='/about'>About</NavLink>
           <NavLink className="nav-link" style={({ isActive }) => isActive ? {color:'blue'} : {color:'black'}} to='/add-post'>Add Post</NavLink>
           <NavLink className="nav-link" style={({ isActive }) => isActive ? {color:'blue'} : {color:'black'}} to='/login'>Login</NavLink>
           <NavLink className="nav-link" style={({ isActive }) => isActive ? {color:'blue'} : {color:'black'}} to='/register'>Register</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by names"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarC;
