import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span id="k">K</span>
          <span id="h">H</span>
          <span id="o">O</span>
          <span id="j">J</span>
        </h3>

        <p className="footer-links">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum
          beatae doloremque, nesciunt repudiandae exercitationem.
        </p>

        <p className="footer-company-name">
          All right reserved Copyright © 2021
        </p>
      </div>

      <div className="footer-center">
        <h4>Important Link</h4>
        <br />
        <div>
          <a
            href="https://www.lpu.in"
            alt="Lpu"
            target="_blank"
            rel="noreferrer"
          >
            Lovely Professional University
          </a>
        </div>

        <div>
          <a
            href="https://www.studentorganisationcell.com/"
            alt="studentorganisationcell"
            target="_blank"
            rel="noreferrer"
          >
            <br />
            Student Organisation Cell
          </a>
        </div>

        <div>
          <a
            href="https://happenings.lpu.in/"
            alt="happenings"
            target="_blank"
            rel="noreferrer"
          >
            <br />
            Happening @LPU
          </a>
        </div>
        <div>
          <a href="google.com" alt="Lpu" target="_blank" rel="noreferrer">
            <br />
            Join Our Team
          </a>
        </div>
      </div>

      <div className="footer-right">
        <h4>Contact Us</h4>
        <div className="button">
          <a href="">
            <i>
              <FaFacebook />
            </i>
          </a>
          <div className="blurred">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="button">
          <a href="">
            <i>
              <FaFacebook />
            </i>
          </a>

          <div className="blurred">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
