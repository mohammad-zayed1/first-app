import React from "react";
import me from "./Screenshot (49).png";
// icons
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
function Info() {
  return (
    <div className="info">
      <img src={me} alt="mzayed" />
      <h2>Mohammad Zayed</h2>
      <h3>Web Developer</h3>
      <h4>mzayed2001@hotmail.com</h4>
      <div className="btns">
        <a href="mailto:mzayed2001@hotmail.com" className="btn">
          <i>
            <HiOutlineMail />
          </i>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/mohammadzayed/"
          className="btn linkedin"
        >
          <i>
            <FaLinkedin />
          </i>
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Info;
