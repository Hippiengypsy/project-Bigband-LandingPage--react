import { Container, Row , Col, Image } from 'react-bootstrap'

import Styles from "./Contact.module.scss";

import ContactLogo from "../../../assets/contact1.gif";

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.contact__img} src={ContactLogo} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={Styles.contact__adress}>
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
                <Col>
                    <div className={Styles.contact__tel}>
                        <b>+82-2-6012-8915</b>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={Styles.contact__email}>
                        <span>음원문의 : jacob@bigbandent.com</span><br/>
                        <span>정산문의 : julie@bigbandent.com</span><br/>
                        <span>해외유통문의 : gabriel@bigbandent.com</span><br/>
                        <span>녹음실예약 : dm8915@bigband.kr</span>
                    </div>
                </Col>
                <Col>
                    <div className={Styles.contact__fax}>
                        <b>+82-2-6008-0708 (fax)</b>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;