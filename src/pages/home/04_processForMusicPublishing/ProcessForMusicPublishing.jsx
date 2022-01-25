import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./ProcessForMusicPublishing.module.scss";

import ProcessLogo from "../../../assets/process_top.png";
import Process01 from "../../../assets/process_01.png";
import Process02 from "../../../assets/process_02.png";
import Process03 from "../../../assets/process_03.png";
import Process04 from "../../../assets/process_04.png";
import ContainerBox from '../../../components/layoutBox/ContainerBox';

const ProcessForMusicPublishing = () => {
    return (
        <ContainerBox>
            <Row>
                <Col>
                    <Image className={Styles.process__logo} src={ProcessLogo} />
                </Col>
            </Row>
            <div className={Styles.process_step}>
                <div className={Styles.process_step01}>
                    <Image src={Process01} />
                </div>
                <div className={Styles.process_step02}>
                    <Image src={Process02} />
                </div>
                <div className={Styles.process_step03}>
                    <Image src={Process03} />
                </div>
                <div className={Styles.process_step04}>
                    <Image src={Process04} />
                </div>
            </div>
        </ContainerBox>

    )
}

export default ProcessForMusicPublishing;