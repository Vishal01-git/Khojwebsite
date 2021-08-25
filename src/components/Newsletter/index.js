import React from "react";
import "./style.css";
import letter from "../../assets/letter.gif";
export function NewsLetter() {
  return (
    <div className="letter_container">
      <div className="letter_card">
        <div className="letter">
          <form action="">
            <img src={letter} alt="" />
            <h3>subscribe to our mailing list</h3>
            <div className="letter_inputBox">
              <input type="email" placeholder="enter your email" />
              <input type="submit" value="subscribe" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
