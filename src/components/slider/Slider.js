import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    return (
      <>
        <img src={imageSrc} alt="Travel" className="slider__image" />
        <div className="slider__content">
          <h1 className="slider__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </>
    );
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
