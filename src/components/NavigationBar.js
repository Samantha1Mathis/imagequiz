import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar(props){
    return (
        <Navbar bg= "dark" expand="lg" variant="dark">
            <Navbar.Brand hred="#Home">ImageQuiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className="link" to="/">Home</Link></Nav.Link>
                    <br></br>
                    <Nav.Link>{props.username === '' ?
                    <Link className='link' to="/login">Login</Link>
                    :
                    <Link className='link' to="/login">{props.username}, Logout</Link>
                     }
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}
export default NavigationBar;