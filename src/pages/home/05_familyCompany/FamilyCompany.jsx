import { Row , Col, Image} from 'react-bootstrap'

import Styles from "./FamilyCompany.module.scss";

import Family from "../../../assets/family_top.png";
import Bigband from "../../../assets/family1.gif";
import Naturally from "../../../assets/family2.gif";
import ContainerBox from '../../../components/layoutBox/ContainerBox';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..

const FamilyCompany = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ContainerBox>
            <Row>
                <Col>
                    <Image data-aos="fade-up" className={Styles.family__logo} src={Family}/>
                </Col>
            </Row>
            <Row>
                <div className={Styles.family__img}>
                    <Col>
                        <Image data-aos="fade-right" src={Bigband} />
                        <Image data-aos="fade-left" src={Naturally} />
                    </Col>
                </div>
            </Row>
        </ContainerBox>
    )
}

export default FamilyCompany;