import ContainerBox from "../../../components/layoutBox/ContainerBox";
import Map from "../../../components/map/Map";
import Styles from "./KakaoMap.module.scss";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..


const KakaoMap = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ContainerBox>
            <div data-aos="fade-up" className={Styles.map__box}>
                <Map className={Styles.map__item}/>
            </div>
        </ContainerBox>
    )
}

export default KakaoMap;