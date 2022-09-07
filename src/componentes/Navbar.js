import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import {NavLink, Link} from 'react-router-dom';


function NavBar(){
    return(
        
        <div>
            <Navbar className= "navbar-principal">
                
                <Container>
                    <NavLink to ='/'>
                        <Navbar.Brand href="#home" className="navbar-brand px-5" >Bazar Antelo</Navbar.Brand>
                    </NavLink>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav-link">
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos">Productos</NavLink>
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos/hogar">Hogar</NavLink>
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos/tecnologia">Tecnologia</NavLink>
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos/novedades">Novedades</NavLink>
                            </Nav>  
                        </Navbar.Collapse>
                        <Button href="#ingresar" variant="outline-success">Ingresar</Button>
                </Container>
                <a href="#cart" className='px-5'><CartWidget/></a>
                
                </Navbar>
        </div>    
    )
        
         
}

export default NavBar;