import { Container, Row , Col, Image} from 'react-bootstrap'

import Styles from "./KoreanMusicMarket.module.scss";

import KMarketLogo from "../../../assets/kmarket_top.png";
import KMarketSubs from "../../../assets/kmarket_subscriber.png";
import KMarketMontly01 from "../../../assets/kmarket_monthly01.png";
import KMarketMontly02 from "../../../assets/kmarket_monthly02.png";

const KoreanMusicMarket = () => {
    return (
        <Container>
            <Row>
                <Col sm>
                    <Image className={Styles.kmarket__logo} src={KMarketLogo} />
                </Col>
            </Row>
            <Row className={Styles.general__box}>
                <Col>
                    <Image className={Styles.kmarket__img} src={KMarketSubs} />
                </Col>
            </Row>
            <Row className={Styles.general__box}>
                <Col sm>
                    <Image className={Styles.kmarket__img} src={KMarketMontly01} />
                </Col>
                <Col sm>
                    <Image className={Styles.kmarket__img} src={KMarketMontly02} />
                </Col>
            </Row>
        </Container>
    )
}

export default KoreanMusicMarket;