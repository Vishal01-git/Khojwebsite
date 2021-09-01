import React from "react";
import "./AboutHero.css";
import video from "../../assets/Aboutus.mp4";
function AboutHero() {
  return (
    <div>
      <div className="parallax-wrapper">
        <div className="hero parallax-content">
          <video autoplay="autoplay" muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero__title">
            <h1 className="Aboutus_hero_h1">We are Student Community</h1>
          </div>
        </div>
        <div className="main-content">
          <div className="scroll-icon-container">
            <svg className="icon--down-arrow" viewBox="0 0 24 24">
              <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
            </svg>
          </div>
          <h2 className="Aboutus_hero_h2">
            Our Complete journey step by step.
          </h2>
          <p className="Aboutus_hero_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio
            voluptate expedita tenetur, fuga cum molestiae ea aliquid quia
            architecto, veritatis distinctio blanditiis id velit tempora
            consequuntur. Voluptates similique ex nemo, esse eos doloribus illum
            ut velit ea placeat rerum?
          </p>
          <p className="Aboutus_hero_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa
            sed dolores at, iure inventore nemo consequuntur provident odio enim
            voluptatibus vel facere quam, harum possimus necessitatibus
            repellendus blanditiis laudantium tempora aperiam eveniet. Eum,
            rerum!
          </p>
          <p className="Aboutus_hero_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis
            repudiandae at consequuntur ab sequi iusto distinctio dignissimos
            quaerat optio voluptatum natus atque perferendis, beatae, debitis
            ullam facere amet autem sit eaque explicabo dolorem. Omnis
            consequuntur accusantium nulla, similique enim tenetur soluta rem
            iure eveniet, illum itaque sed, ex quaerat!
          </p>
          <p className="Aboutus_hero_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem facilis facere labore ad recusandae blanditiis, sequi
            doloribus voluptatum cupiditate sit sapiente repellendus quod odio
            maiores molestiae aspernatur impedit! Quos, cumque deleniti saepe
            sed voluptas odio dolor, exercitationem inventore nulla porro
            explicabo laborum animi laudantium neque ipsum placeat nam ea nisi
            ut molestias provident. Impedit, perferendis.
          </p>
          <p className="Aboutus_hero_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            officiis fuga eum nostrum ratione sed, similique dicta, eaque neque,
            dolore quas facere vel quidem commodi. Numquam hic earum sint quas,
            modi dicta quis voluptates saepe. Quaerat, voluptas iure eveniet,
            deleniti explicabo atque voluptatem similique cum incidunt veniam
            illum. Quam, doloremque?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
