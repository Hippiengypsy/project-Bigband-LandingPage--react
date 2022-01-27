import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from "./NavigationBar.module.scss";

import NavLogo from "../../assets/logo.gif";

const NavigationBar = () => {
    return (
        <>
            <Navbar className={Styles.navbar} collapseOnSelect expand="md" variant="light">
                <Container className={Styles.navbar__container}>
                    <Navbar.Brand href="#home">
                        <img src={NavLogo} alt="" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={Styles.right}>
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Work">Work</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
