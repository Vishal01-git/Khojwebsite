import React from "react";
import "../Ourteam/Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/index";
const small1 = window.matchMedia("(max-width:650px)");
const small2 = window.matchMedia("(max-width:1000px)");

function Ourteam() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  if (small2.matches) {
    settings.slidesToShow = 2;
  }
  if (small1.matches) {
    settings.slidesToShow = 1;
  }
  return (
    <div className="container mt-5 carousel">
      <h1 id="title">Our Founders</h1>
      <Slider {...settings}>
        <Card image="Aditya Raj Singh" name="Aditya Raj Singh" text="KHOJ" />
        <Card image="AMANDEEP THAKUR" name="AMANDEEP THAKUR" text="KHOJ" />
        <Card
          image="Ashutosh Kumar Yadav"
          name="Ashutosh Kumar Yadav"
          text="KHOJ"
        />
        <Card image="Kanishk Sanadhya" name="Kanishk Sanadhya" text="KHOJ" />
        <Card image="khushboo kumari" name="khushboo kumari" text="KHOJ" />
        <Card image="khushi garg" name="khushi garg" text="KHOJ" />
        <Card image="Neha Kumari" name="Neha Kumari" text="KHOJ" />
        <Card image="Nitesh Raghav" name="Nitesh Raghav" text="KHOJ" />
        <Card image="Pranjal Bhalla" name="Pranjal Bhalla" text="KHOJ" />
        <Card image="Preet Sharma" name="Preet Sharma" text="KHOJ" />
        <Card image="Prerna Maheshwari" name="Prerna Maheshwari" text="KHOJ" />
        <Card image="Prithvi Raj" name="Prithvi Raj" text="KHOJ" />
        <Card
          image="Rishappreet Singh Moonga"
          name="Rishappreet Singh Moonga"
          text="KHOJ"
        />
        <Card image="SAQUEB SIDDIQUE" name="SAQUEB SIDDIQUE" text="KHOJ" />
        <Card image="Savvy Sahai" name="Savvy Sahai" text="KHOJ" />
      </Slider>
    </div>
  );
}

export default Ourteam;
