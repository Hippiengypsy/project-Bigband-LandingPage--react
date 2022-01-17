import Slider from './../../../components/slider/Slider';
import AboutImg from "../../../assets/about1.gif";

const HomeAbout = () => {
    return (
        <div>
            <Slider
                imageSrc={AboutImg}
                title={"Be an explorer."}
                subtitle={
                "Our platform offers a wide variety of unique travel locations!"
                }
            />
        </div>
    )
}

export default HomeAbout
