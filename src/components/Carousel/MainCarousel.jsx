import Main01 from "../../assets/main1.gif";
import Main02 from "../../assets/main2.gif";
import Main03 from "../../assets/main3.gif";
import Main04 from "../../assets/main4.gif";
import Main05 from "../../assets/main5.gif";

import Carousel from 'react-bootstrap/Carousel'
import Styles from "./MainCarousel.module.scss";

const MainCarousel = () => {
    return (
        <div >
            <Carousel className={Styles.carousel}>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Main01}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Main02}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Main03}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Main04}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src={Main05}
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainCarousel
