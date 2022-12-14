import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import {NavLink, Link} from 'react-router-dom';


export const NavBar = () =>{
    return(
        
        <div>
            <Navbar className= "navbar-principal">
                <Container>
                    <NavLink to ='/'>
                        <Navbar.Brand href="#home" className="navbar-brand px-5" >Bazar Antelo</Navbar.Brand>
                    </NavLink>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav-link">
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos">Productos </NavLink>
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/category/hogar">Hogar </NavLink>
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/category/tecnologia">Tecnologia </NavLink>
                                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/category/novedades">Novedades </NavLink>
                            </Nav>  
                        </Navbar.Collapse>
                        <Button href="#ingresar" variant="outline-success">Ingresar</Button>
                </Container>
                <Link to='/cart' className='px-5'><CartWidget/></Link>
                </Navbar>
        </div>    
    )
        
         
}

export default NavBar;