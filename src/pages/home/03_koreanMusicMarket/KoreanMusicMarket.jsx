import { Row , Col, Image} from 'react-bootstrap'

import Styles from "./KoreanMusicMarket.module.scss";

import KMarketLogo from "../../../assets/kmarket_top.png";
import KMarketSubs from "../../../assets/kmarket_subscriber.png";
import KMarketMontly01 from "../../../assets/kmarket_monthly01.png";
import KMarketMontly02 from "../../../assets/kmarket_monthly02.png";
import ContainerBox from './../../../components/layoutBox/ContainerBox';

const KoreanMusicMarket = () => {
    return (
        <ContainerBox>
            <Row>
                <Col sm>
                    <Image className={Styles.kmarket__logo} src={KMarketLogo} />
                </Col>
            </Row>
            <div className={Styles.general__box}>
                <div>
                    <Image className={Styles.kmarket__img} src={KMarketSubs} />
                </div>
            </div>
            <div className={Styles.general__box}>
                <div>
                    <Image className={Styles.kmarket__img} src={KMarketMontly01} />
                </div>
                <div>
                    <Image className={Styles.kmarket__img} src={KMarketMontly02} />
                </div>
            </div>
        </ContainerBox>
    )
}

export default KoreanMusicMarket;