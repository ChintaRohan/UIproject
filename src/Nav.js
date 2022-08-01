import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './About';
import Login from './Login';
import App from './App';
import './App.css';
import Register from './Register.js';

function NavScrollExample() {
    return (
        <div >

            <BrowserRouter>
                <Navbar className='navBar' fixed='top'>
                    <Container fluid>
                        <Navbar.Brand href="/"><p className='Nav'><b>Binge Watchable</b></p></Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav>
                                <Nav.Link href="/"><p className='Navmenu'>Movies</p></Nav.Link>
                                <Nav.Link href="/about"><p className='Navmenu'>About</p></Nav.Link>
                                <Nav.Link href="/login"><p className='Navmenu'>Login</p></Nav.Link>
                                <Nav.Link href="/register"><p className='Navmenu'>Register</p></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            

            <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/' element={<App />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
            </BrowserRouter>


        </div>

    );
}

export default NavScrollExample;