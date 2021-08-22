import "./style.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/poster1.jpg";
import celebrating from "../../assets/poster2.jpg";
import education from "../../assets/poster3.jpg";
import taken from "../../assets/poster4.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function UpcomingEvents() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const small = window.matchMedia("(max-width:600px)");
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  if (small.matches) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="App">
      <h1 id="title">Our Upcoming Events</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default UpcomingEvents;
