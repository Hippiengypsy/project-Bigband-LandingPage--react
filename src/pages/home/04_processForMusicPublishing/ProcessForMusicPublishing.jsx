import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./ProcessForMusicPublishing.module.scss";

import Process from "../../../assets/process1.gif";

const ProcessForMusicPublishing = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.process__img} src={Process} />
                </Col>
            </Row>
        </Container>

    )
}

export default ProcessForMusicPublishing;