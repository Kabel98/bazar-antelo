import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Button from 'react-bootstrap/Button';


function NavBar(){
    return(
        <div>
            <Navbar className= "navbar-principal">
                <Container>
                    <Navbar.Brand href="#home">Bazar Antelo</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav-link">
                                <Nav.Link href="#hogar">Hogar</Nav.Link>
                                <Nav.Link href="#tecnologia">Tecnologia</Nav.Link>
                                <Nav.Link href="#novedades">Novedades</Nav.Link>
                            </Nav>
                            <Button variant="outline-success">Ingresar</Button>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>    
    )
        
         
}

export default NavBar;