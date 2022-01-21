import Styles from "./Footer.module.scss";

import { Container, Row, Col } from 'react-bootstrap'

import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import FooterLogo from "../../../assets/botlogo.gif";

const Footer = () => {
    return (
        <div className={Styles.footer}>
            <Container>
                <Row className={Styles.footer}>
                    <Col>
                        <img src={FooterLogo} alt="" className="logo"/>
                    </Col>
                    <Col md={6}>
                        <p>Copyright ⓒ 2014 BIGBAND. All rights reserved. </p>
                    </Col>
                    <Col>
                        <div className={Styles.footer__icons}>
                            <YouTubeIcon fontSize='large'/>
                            <FacebookIcon fontSize='large'/>
                            <TwitterIcon fontSize='large'/>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer;