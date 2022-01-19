import { Container, Row , Col, Image } from 'react-bootstrap'

import Styles from "./Contact.module.scss";

import ContactLogo from "../../../assets/contact_top.png";

import ContactAdress from "../../../assets/contact_adress.png";
import ContactTel from "../../../assets/contact_tel.png";
import ContactEmail from "../../../assets/contact_email.png";
import ContactFax from "../../../assets/contact_fax.png";

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.contact__logo} src={ContactLogo} />
                </Col>
            </Row>
            <Row>
                <Col lg md sm="2">
                    <Image className={Styles.contact__img} src={ContactAdress} />
                </Col>
                <Col lg md sm="4">
                    <div className={Styles.contact__text}>
                        <div>
                            <b>North America Office</b><br/>
                            <span>3010 LBJ Fwy Ste 130 Dallas, Texas 75234 U.S.A</span>
                        </div>
                        <br/>
                        <div>
                            <b>Korea Office</b><br/>
                            <span>서울 금천구 가산디지털1로 128 STX-V타워, 508-2호</span>
                        </div>
                        <br/>
                        <div>
                            <b>China Office</b><br/>
                            <span>503 No.5 17-19 North Section, Digital Road,</span><br/>
                            <span>High-Tech Industrial Zone, Dalian, 116023 China</span>
                        </div>
                    </div>
                </Col>
                <Col lg md sm="2">
                    <Image className={Styles.contact__img} src={ContactTel} />
                </Col>
                <Col lg md sm="4">
                    <div className={Styles.contact__text}>
                        <b>+82-2-6012-8915</b>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg md sm="2">
                    <Image className={Styles.contact__img} src={ContactEmail} />
                </Col>
                <Col lg md sm="4">
                    <div className={Styles.contact__text}>
                        <span>음원문의 : jacob@bigbandent.com</span><br/>
                        <span>정산문의 : julie@bigbandent.com</span><br/>
                        <span>해외유통문의 : gabriel@bigbandent.com</span><br/>
                        <span>녹음실예약 : dm8915@bigband.kr</span>
                    </div>
                </Col>
                <Col lg md sm="2">
                    <Image className={Styles.contact__img} src={ContactFax} />
                </Col>
                <Col lg md sm="4">
                    <div className={Styles.contact__text}>
                        <b>+82-2-6008-0708 (fax)</b>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;