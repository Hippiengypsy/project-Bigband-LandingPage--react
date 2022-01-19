import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./KoreanMusicMarket.module.scss";


import KMarket from "../../../assets/market1.gif";

const KoreanMusicMarket = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.kmarket__img} src={KMarket} />
                </Col>
            </Row>
        </Container>
    )
}

export default KoreanMusicMarket;