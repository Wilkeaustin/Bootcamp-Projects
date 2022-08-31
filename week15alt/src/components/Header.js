import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

const Header = () => {
  return (
    <Navbar color='dark' dark>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <NavbarBrand style={{ paddingBottom: '5px' }}  href='/'>My Dream Trips</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className='btn btn-primary' to={'/AddDestination'}>Add Destination</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
)}

export default Header
