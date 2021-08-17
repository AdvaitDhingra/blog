import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link className = "headerLink" to = "/">Advait Dhingra</Link></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link ><Link to = "/" className = "headerLink">Home</Link></Nav.Link>
        <Nav.Link ><Link to = "/about" className = "headerLink">About Me</Link></Nav.Link>
        <Nav.Link ><Link to = "/posts" className = "headerLink">Posts</Link></Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )

}