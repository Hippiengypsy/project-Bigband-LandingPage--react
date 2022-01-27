import { Row , Col, Image } from 'react-bootstrap'

import Styles from "./Contact.module.scss";

import ContactLogo from "../../../assets/contact_top.png";

import ContactAdress from "../../../assets/contact_adress.png";
import ContactTel from "../../../assets/contact_tel.png";
import ContactEmail from "../../../assets/contact_email.png";
import ContactFax from "../../../assets/contact_fax.png";
import ContainerBox from '../../../components/layoutBox/ContainerBox';

const Contact = () => {
    return (
        <ContainerBox>
            <Row>
                <Col>
                    <Image className={Styles.contact__logo} src={ContactLogo} />
                </Col>
            </Row>
            <div className={Styles.contact__container}>
                <div className={Styles.contact__box}>
                    <div className={Styles.contact__item}>
                        <div className={Styles.contact__img}>
                            <Image src={ContactAdress} />
                        </div>
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
                    </div>

                    <div className={Styles.contact__item}>
                        <div className={Styles.contact__img}>
                            <Image src={ContactTel} />
                        </div>
                        <div className={Styles.contact__text}>
                            <b>+82-2-6012-8915</b>
                        </div>
                    </div>
                </div>
                
                <div className={Styles.contact__box}>
                    <div className={Styles.contact__item}>
                        <div className={Styles.contact__img}>
                            <Image src={ContactEmail} />
                        </div>
                        <div className={Styles.contact__text}>
                                <b>음원문의</b><br/><span>jacob@bigbandent.com</span><br/>
                                <b>정산문의</b><br/><span>julie@bigbandent.com</span><br/>
                                <b>해외유통문의</b><br/><span>gabriel@bigbandent.com</span><br/>
                                <b>녹음실예약</b><br/><span>dm8915@bigband.kr</span>
                        </div>
                    </div>

                    <div className={Styles.contact__item}>
                        <div className={Styles.contact__img}>
                            <Image src={ContactFax} />
                        </div>
                        <div className={Styles.contact__text}>
                            <b>+82-2-6008-0708 (fax)</b>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBox>
    )
}

export default Contact;