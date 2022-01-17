import MainCarousel from "../../components/carousel/MainCarousel";
import HomeAbout from "./01_about/HomeAbout";
import OnlineRetailStores from "./02_onlineRetailStores/OnlineRetailStores";
import  "./Home.module.scss";

const Home = () => {
    return (
        <div className='home'>
            <MainCarousel />
            <HomeAbout />
            <OnlineRetailStores />
            <br />img: Korean music market
            <br />img: Process for music
            <br />img: family company
            <br />img: contact
            <br />api: map
            <br />footer
        </div>
    )
}

export default Home;