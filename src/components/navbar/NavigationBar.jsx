import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from "./NavigationBar.module.scss";

import NavLogo from "../../assets/logo.gif";
import {Link} from 'react-scroll'
const NavigationBar = () => {
    return (
        <>
        {/* scroll to div id */}
        <div id="Home" />
            <Navbar className={Styles.navbar} collapseOnSelect expand="md" variant="light">
                <Container className={Styles.navbar__container}>
                    <Navbar.Brand href="/">
                        <img src={NavLogo} alt="" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={Styles.right}>
                            <Nav.Link>
                                <Link to="Home" spy={true} smooth={true} duration={200}>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="About" spy={true} smooth={true} duration={200}>
                                    About
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#Work">
                                <Link to="Work" spy={true} smooth={true} duration={200}>
                                    Work
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#Contact">
                                <Link to="Contact" spy={true} smooth={true} duration={200}>
                                Contact
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
