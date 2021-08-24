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
    <div className="teambg">
      <div className="container mt-5 carousel">
        <h1 id="title">Our Founders</h1>
        <Slider {...settings}>
          <Card
            image="YOUROWNPHOTO"
            name="Subham Kumar Pandey"
            text="CEO"
            facebook="#"
            insta="#"
            twitter="#"
            linkedin="#"
          />
          <Card
            image="YOUROWNPHOTO"
            name="Harsh Sharma"
            text="Co-Ceo"
            facebook="#"
            insta="#"
            twitter="#"
            linkedin="#"
          />
          <Card
            image="SHIV KUMAR VERMA"
            name="Shiv Kumar Verma"
            text="Co-Ceo"
            facebook="https://m.facebook.com/ShivKumarVermaaa"
            insta="https://www.instagram.com/shivk.v/"
            twitter="https://twitter.com/SHIVKUMARVERMA_?s=09"
            linkedin="https://www.linkedin.com/in/shiv-kumar-verma-3a8a83192"
          />
          <Card
            image="Vishal prajapati"
            name="Vishal Prajapati"
            text="CTO"
            facebook="https://www.facebook.com/profile.php?id=100034344001215"
            insta="https://www.instagram.com/prajapativicky7/"
            twitter="https://twitter.com/prrvishal"
            linkedin="https://www.linkedin.com/in/vishalprajapati07/"
          />
          <Card
            image="Rishappreet Singh Moonga"
            name="Rishappreet Singh Moonga"
            text="Treasurer"
            facebook="#"
            insta="https://www.instagram.com/rishappreet/"
            twitter="#"
            linkedin="https://www.linkedin.com/in/rishappreet-singh/"
          />
          <Card
            image="khushboo kumari"
            name="Khushboo Kumari"
            text="Head Event Management"
            facebook="https://www.facebook.com/profile.php?id=100025418595704"
            insta="https://instagram.com/khusboo7536/"
            twitter="#"
            linkedin="https://www.linkedin.com/in/khushboo-kumari-7a3122193"
          />
          <Card
            image="Nitesh Raghav"
            name="Nitesh Raghav"
            text="Graphic Designing"
            facebook="https://www.facebook.com/rghvnitesh/"
            insta="#"
            twitter="#"
            linkedin="https://www.linkedin.com/in/nitesh-kumar-703714204"
          />

          <Card
            image="Yogesh Choudhary"
            name="Yogesh Choudhary"
            text="Social Media Head"
            facebook="#"
            insta="https://instagram.com/yogesh_c22/"
            twitter="#"
            linkedin="https://www.linkedin.com/in/yogesh-choudhary-140730192"
          />
          <Card
            image="Siddhant Gaurav"
            name="Siddhant Gaurav"
            text="Content Writing Head"
            facebook="#"
            insta="#"
            twitter="#"
            linkedin="https://www.linkedin.com/in/siddhant-gaurav-481818178"
          />
          <Card
            image="Ashutosh Kumar Yadav"
            name="Ashutosh Kumar Yadav"
            text="Video Editing Head"
            facebook="#"
            insta="https://www.instagram.com/_ashutoshg/"
            twitter="https://twitter.com/_ashutoshg?s=09"
            linkedin="https://www.linkedin.com/in/ashutosh-kumar-yadav-10b8b4187"
          />
          <Card
            image="AMANDEEP THAKUR"
            name="Amandeep Thakur"
            text="Social Media Head"
            facebook="#"
            insta="#"
            twitter="#"
            linkedin="#"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Ourteam;
