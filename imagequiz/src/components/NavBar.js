import {
    Link
} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar(){
    return (
        <Navbar bg= "light" expand="lg">
            <Navbar.Brand href="#home">Image Quiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.link><Link to="/home">Home</Link></Nav.link>
                    <Nav.link><Link to="/login">Home</Link></Nav.link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}