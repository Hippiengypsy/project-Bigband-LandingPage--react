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
                <Col>
                    <Image className={Styles.kmarket__img} src={KMarketLogo} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <Image className={Styles.kmarket__img} src={KMarketSubs} /> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className={Styles.kmarket__img} src={KMarketMontly01} />
                </Col>
                <Col>
                    <Image className={Styles.kmarket__img} src={KMarketMontly02} />
                </Col>
            </Row>
        </Container>
    )
}

export default KoreanMusicMarket;