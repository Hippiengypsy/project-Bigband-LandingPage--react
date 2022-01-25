import ContainerBox from "../../../components/layoutBox/ContainerBox";
import Map from "../../../components/map/Map";
import Styles from "./KakaoMap.module.scss";


const KakaoMap = () => {
    return (
        <ContainerBox>
            <div className={Styles.map__box}>
                <Map className={Styles.map__item}/>
            </div>
        </ContainerBox>
    )
}

export default KakaoMap;