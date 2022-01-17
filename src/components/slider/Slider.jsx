import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
        <img src={imageSrc} alt="Travel" className="slider__image" />
        <div className="slider__content">
          <h1 className="slider__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
    </div>
  );
};

export default Slider;