
import React from 'react';
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
function Footer(){
    return(
    <div className="footer">
        <ul>
            <li><AiFillTwitterSquare/></li>
            <li><AiFillFacebook/></li>
            <li><AiFillInstagram/></li>
            <li><AiFillGithub/></li>
        </ul>
    </div>
    )
}

export default Footer;