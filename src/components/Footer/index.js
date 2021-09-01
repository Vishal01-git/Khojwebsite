import React from "react";
import "./style.css";
import { FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

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

        <p className="footer-company-name-left">
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
          <a
            href="https://t.me/officialkhoj/"
            alt="Khoj"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <FaTelegram />
            </i>
          </a>
          <div className="blurred">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="button">
          <a
            href="https://www.instagram.com/officialkhoj/"
            alt="Khoj"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <FaInstagram />
            </i>
          </a>

          <div className="blurred">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="button">
          <a
            href="https://www.linkedin.com/in/khoj-find-ur-real-you-424709204/"
            alt="Khoj"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <FaLinkedin />
            </i>
          </a>

          <div className="blurred">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="button">
          <a
            href="mailto: khoj.lpu.official@gmail.com"
            alt="Send Email"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <FiMail />
            </i>
          </a>

          <div className="blurred">
            <span></span>
            <span></span>
          </div>
        </div>
        <p className="footer-company-name-right">
          All right reserved Copyright © 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
