import Map from "../../../components/map/Map";
import Styles from "./KakaoMap.module.scss";


const KakaoMap = () => {
    return (
        <div className={Styles.map__container}>
            <div className={Styles.map__box}>
                <Map className={Styles.map__box}/>
            </div>
        </div>
    )
}

export default KakaoMap;