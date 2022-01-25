import Styles from "./OnlineRetailStores.module.scss";
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row , Col, Image} from 'react-bootstrap'

import OnlineStores from "../../../assets/onlineRetailStores.gif";

import Itunes from "../../../assets/company_logos/itunes.png";
import Amazon from "../../../assets/company_logos/amazon.png";
import Bugs from "../../../assets/company_logos/bugs.png";
import Soribada from "../../../assets/company_logos/soribada.png";
import Genie from "../../../assets/company_logos/genie.png";
import Melon from "../../../assets/company_logos/melon.png";
import Spotify from "../../../assets/company_logos/spotify.png";
import Youtubemusic from "../../../assets/company_logos/youtubemusic.png";
import Deezer from "../../../assets/company_logos/deezer.png";
import Mnet from "../../../assets/company_logos/mnet.png";
import ContainerBox from "../../../components/layoutBox/ContainerBox";



const OnlineRetailStores = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.stores__logo} src={OnlineStores} />
                </Col>
            </Row>

                <div className={Styles.carousel__item}>
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
                        src={Youtubemusic}
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
                </div>

        </Container>
    )
}

export default OnlineRetailStores;