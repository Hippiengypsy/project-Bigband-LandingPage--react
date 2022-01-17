import Itunes from "../../../assets/company_logos/itunes.png";
import Amazon from "../../../assets/company_logos/amazon.png";
import Bugs from "../../../assets/company_logos/bugs.jpg";
import Soribada from "../../../assets/company_logos/soribada.png";
import Genie from "../../../assets/company_logos/genie.jpg";
import Melon from "../../../assets/company_logos/melon.png";
import Spotify from "../../../assets/company_logos/spotify.png";
import GooglePlayMusic from "../../../assets/company_logos/googleplaymusic.png";
import Deezer from "../../../assets/company_logos/deezer.png";
import Mnet from "../../../assets/company_logos/mnet.png";

import Carousel from 'react-bootstrap/Carousel'
import Slider from "../../../components/slider/Slider";

const OnlineRetailStores = () => {
    return (
        <div>
            <Slider>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Itunes}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Amazon}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Bugs}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Genie}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Soribada}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Melon}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Spotify}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={GooglePlayMusic}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Deezer}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Mnet}
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Slider>
        </div>
    )
}

export default OnlineRetailStores
