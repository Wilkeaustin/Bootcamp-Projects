import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import img2 from '../images/burger2.jpg';
import "animate.css";


function handleMouseEnter(e) {
    console.log(e.target)
}

function Menu() {

    return (
        <nav>
            <Navbar className="name" expand="lg">
                <Container className='container-width'>
                <Navbar.Brand><b>Burger Bungalow</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links">
                    <Nav.Link onMouseEnter={handleMouseEnter} href="/">Home</Nav.Link>
                    <Nav.Link href="create">Create</Nav.Link>
                    <Nav.Link href="explore">Explore</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                <Nav.Link href="profile" className='burger-pfp'><img src={img2}></img></Nav.Link>
            </Navbar>
      </nav>
      
    );
  }
  
  export default Menu;