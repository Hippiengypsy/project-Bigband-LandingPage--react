import Styles from "./Home.module.scss";

import MainCarousel from "../../components/carousel/MainCarousel";
import HomeAbout from "./01_about/HomeAbout";
import OnlineRetailStores from "./02_onlineRetailStores/OnlineRetailStores";
import KoreanMusicMarket from "./03_koreanMusicMarket/KoreanMusicMarket";
import ProcessForMusicPublishing from "./04_processForMusicPublishing/ProcessForMusicPublishing";
import FamilyCompany from './05_familyCompany/FamilyCompany';
import Contact from "./06_contact/Contact";
import Footer from "./08_footer/Footer";
import KakaoMap from "./07_kakaoMap/KakaoMap";

const Home = () => {

    return (
        <div className={Styles.home}>
            <MainCarousel />
            <HomeAbout />
            <OnlineRetailStores />
            <KoreanMusicMarket />
            <ProcessForMusicPublishing />
            <FamilyCompany />
            <Contact />
            <KakaoMap />
            <Footer />
        </div>
    )
}

export default Home;