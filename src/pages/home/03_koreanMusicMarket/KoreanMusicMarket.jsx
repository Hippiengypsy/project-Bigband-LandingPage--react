import { Row , Col, Image} from 'react-bootstrap'

import Styles from "./KoreanMusicMarket.module.scss";

import KMarketLogo from "../../../assets/kmarket_top.png";
import KMarketSubs from "../../../assets/kmarket_subscriber.png";
import KMarketMontly01 from "../../../assets/kmarket_monthly01.png";
import KMarketMontly02 from "../../../assets/kmarket_monthly02.png";
import ContainerBox from './../../../components/layoutBox/ContainerBox';
import FlexBox from '../../../components/layoutBox/FlexBox';
import Item2Col from '../../../components/layoutBox/Item2Col';

const KoreanMusicMarket = () => {
    return (
        <ContainerBox>
            <Row>
                <Col sm>
                    <Image className={Styles.kmarket__logo} src={KMarketLogo} />
                </Col>
            </Row>
            <FlexBox>
                <div>
                    <Image className={Styles.kmarket__subsImg} src={KMarketSubs} />
                </div>
            </FlexBox>
            <div className={Styles.flexbox}>
                <div className={Styles.itemBox}>
                    <Image className={Styles.kmarket__monthlyImg01} src={KMarketMontly01} />
                </div>
                <div className={Styles.itemBox}>
                    <Image className={Styles.kmarket__monthlyImg02} src={KMarketMontly02} />
                </div>
            </div>
        </ContainerBox>
    )
}

export default KoreanMusicMarket;