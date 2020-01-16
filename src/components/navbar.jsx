import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../stylesheets/navv.scss';
import lg from '../assets/prelogo.jpg'

const Navv =()=> {
        return (
        <Navbar id="navbar"  expand="lg" sticky='top'>
        <Navbar.Brand><img style={{maxWidth:'70px', maxHeight:'70px'}} src={lg} alt='' className='fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>
          <NavLink className='navlink' exact activeClassName='active' to='/'>Home</NavLink>
                    <NavLink exact className='navlink' activeClassName='active' to='/about'>About</NavLink>
                    <NavLink exact className='navlink' activeClassName='active' to='/portfolio'>Portfolio</NavLink>
                    <NavLink exact className='navlink' activeClassName='active' to='/contact'>Contact</NavLink>
        </Navbar.Collapse>
      </Navbar>
      );
    }


export default Navv;