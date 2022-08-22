import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';


function NavBar(){
    return(
        
        <div>
            <Navbar className= "navbar-principal">
                <Container>
                    <Navbar.Brand href="#home" class="navbar-brand px-5" >Bazar Antelo</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav-link">
                                <Nav.Link href="#hogar">Hogar</Nav.Link>
                                <Nav.Link href="#tecnologia">Tecnologia</Nav.Link>
                                <Nav.Link href="#novedades">Novedades</Nav.Link>
                            </Nav>  
                        </Navbar.Collapse>
                        <Button href="#ingresar" variant="outline-success">Ingresar</Button>
                </Container>
                <a href="#none" className="px-5"><CartWidget/></a>
            </Navbar>
        </div>    
    )
        
         
}

export default NavBar;