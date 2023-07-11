import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, Route, Routes} from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo.png'

const Header = () => {

   

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img style={{height:'70px'}} src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to={"/home"} className='list-item text-decoration-none'>Home</Link>
                            {/* <Link to={"/contact"} className='list-item text-decoration-none'>Contact</Link> */}
                            <Link to={"/about"} className='list-item text-decoration-none'>about</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;