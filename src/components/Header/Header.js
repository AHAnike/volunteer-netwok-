import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image'
import logo from '../Images/logos/logo.png'

import  './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
            <Navbar className="navbar" >
                <Navbar.Brand href="#home">
                <Image src= {logo} />
                </Navbar.Brand>
                
                <Nav className="mr-auto">
                
                </Nav>
                <Form inline>
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/donation">Donation</Nav.Link>
                <Nav.Link to="/events">Events</Nav.Link>
                <Nav.Link href="#Blogs">Blogs</Nav.Link>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <Button id="btn" variant="primary">Register</Button>
                <Button id="btn" variant="dark">Admin</Button>
                </Form>
            </Navbar>
            </nav>
        </div>
    );
};

export default Header;