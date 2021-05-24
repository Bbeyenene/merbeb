import React from "react";
//AiFillFacebook;
import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <div
        style={{
          paddingLeft: "3rem",
          width: "40%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h3>Contact</h3>

          <p><AiFillMessage />Message</p>

          <p>
            <BsFillEnvelopeFill /> manager@merbeb.com
          </p>
          <p>
            <FaPhoneVolume /> 7084272105
          </p>
        </div>
      </div>

      <div style={{ width: "60%", marginRight: "0" }}>
        <div style={{ width: "70%", float: "right" }}>
          <h4> Follow Us</h4>

          <p>
            <FaFacebook /> Face book
          </p>
          <p>
            <FaTwitterSquare />
            Twitter
          </p>
          <p>
            <FaLinkedin /> LinkdIn
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
