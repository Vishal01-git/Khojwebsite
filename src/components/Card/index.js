import React from "react";
import "../Card/Slider.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Card = ({ name, text, image, facebook, insta, twitter, linkedin }) => {
  const Avatar = require(`../../images/${image}.jpg`).default;
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-image">
          <img src={Avatar} alt="founder" />
        </div>
        <ul className="social-icons">
          <li>
            <a href={facebook} target="_blank" rel="noreferrer">
              <span className="fa">
                <FaFacebook />
              </span>
            </a>
          </li>
          <li>
            <a href={insta} target="_blank" rel="noreferrer">
              <span className="fa">
                <FaInstagram />
              </span>
            </a>
          </li>
          <li>
            <a href={twitter} target="_blank" rel="noreferrer">
              <span className="fa">
                <FaTwitter />
              </span>
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <span className="fa">
                <FaLinkedin />
              </span>
            </a>
          </li>
        </ul>
        <div className="details">
          <h2>
            {name} <span className="job-title">{text}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
