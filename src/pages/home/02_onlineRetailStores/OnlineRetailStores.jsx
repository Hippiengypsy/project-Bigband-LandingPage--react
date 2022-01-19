import Styles from "./OnlineRetailStores.module.scss";
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row , Col, Image} from 'react-bootstrap'

import OnlineStores from "../../../assets/onlineRetailStores.gif";

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



const OnlineRetailStores = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image className={Styles.stores__logo} src={OnlineStores} />
                </Col>
            </Row>

                <div className={Styles.carousel__Item}>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Itunes}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Amazon}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Bugs}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Genie}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Soribada}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Melon}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Spotify}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={GooglePlayMusic}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
                        src={Deezer}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-auto"
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