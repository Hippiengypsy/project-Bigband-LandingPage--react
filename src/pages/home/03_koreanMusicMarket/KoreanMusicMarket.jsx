import { Row , Col, Image} from 'react-bootstrap'

import Styles from "./KoreanMusicMarket.module.scss";

import KMarketLogo from "../../../assets/kmarket_top.png";
import KMarketSubs from "../../../assets/kmarket_subscriber.png";
import KMarketMontly01 from "../../../assets/kmarket_monthly01.png";
import KMarketMontly02 from "../../../assets/kmarket_monthly02.png";
import ContainerBox from './../../../components/layoutBox/ContainerBox';
import FlexBox from '../../../components/layoutBox/FlexBox';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..
AOS.init();

const KoreanMusicMarket = () => {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, []);

    return (
        <ContainerBox>
            <Row>
                <Col sm>
                    <div data-aos="fade-up">
                        <Image className={Styles.kmarket__logo} src={KMarketLogo} />
                    </div>
                </Col>
            </Row>
            <FlexBox>
                <div data-aos="fade-up">
                    <Image className={Styles.kmarket__subsImg} src={KMarketSubs} />
                </div>
            </FlexBox>
            <FlexBox>
                <div data-aos="fade-right" className={Styles.itemBox}>
                    <Image className={Styles.kmarket__monthlyImg01} src={KMarketMontly01} />
                </div>
                <div data-aos="fade-left" className={Styles.itemBox}>
                    <Image className={Styles.kmarket__monthlyImg02} src={KMarketMontly02} />
                </div>
            </FlexBox>
        </ContainerBox>
    )
}

export default KoreanMusicMarket;