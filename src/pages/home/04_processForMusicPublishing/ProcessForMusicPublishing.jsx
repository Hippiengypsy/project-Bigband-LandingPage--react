import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./ProcessForMusicPublishing.module.scss";

import ProcessLogo from "../../../assets/process_top.png";
import Process01 from "../../../assets/process_01.png";
import Process02 from "../../../assets/process_02.png";
import Process03 from "../../../assets/process_03.png";
import Process04 from "../../../assets/process_04.png";
import ContainerBox from '../../../components/layoutBox/ContainerBox';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..

const ProcessForMusicPublishing = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ContainerBox>
            <Row>
            {/* scroll to div id */}
            <div id="Work" />
                <Col data-aos="fade-up">
                    <Image className={Styles.process__logo} src={ProcessLogo} />
                </Col>
            </Row>
            <div className={Styles.process_step}>
                <div className={Styles.process_step01}>
                    <img data-aos="fade-down" data-aos-offset="300" className={Styles.process_img01} src={Process01} alt='' />
                    <img data-aos="fade-up" data-aos-offset="300" className={Styles.process_img02} src={Process02} alt='' />
                </div>
                <div className={Styles.process_step02}>
                    <img data-aos="fade-down" data-aos-offset="300" className={Styles.process_img03} src={Process03} alt='' />
                    <img data-aos="fade-up" data-aos-offset="300" className={Styles.process_img04} src={Process04} alt='' />
                </div>
            </div>
        </ContainerBox>

    )
}

export default ProcessForMusicPublishing;