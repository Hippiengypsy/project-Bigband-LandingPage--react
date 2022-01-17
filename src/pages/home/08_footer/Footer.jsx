// import "./Footer.module.scss";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BigbandLogo from "../../../assets/botlogo.gif";

const Footer = () => {
    return (
        <Container >
            <Row>
                <Col>
                    <img src={BigbandLogo} alt="" className="logo"/>
                </Col>
                <Col>
                    <h>North America Office</h>
                    <span>3010 LBJ Fwy Ste 130 Dallas,</span>
                    <span>Texas 75234 U.S.A</span>
                </Col>
                <Col>
                    <h>Korea Office</h>
                    <span>경기도 안양시 동안구 시민대로327번길 11-41, 8층 801호</span>
                    <span>빅밴드(관양동,안양창조경제융합센터)</span>
                </Col>
                <Col>
                    <h>China Office</h>
                    <span>503 No.5 17-19 North Section, Digital Road,</span>
                    <span>High-Tech Industrial Zone, Dalian, 116023 China</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h>Copyright ⓒ 2014 BIGBAND. All rights reserved. </h>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;