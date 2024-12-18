import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaRegCopyright } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
        <p>
             ©️ 2024 BUYERS GALAXY. ALL RIGHTS RESERVED
        </p>
        <div className="icon-container">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
                <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="icon tiktok">
                <FaTiktok />
            </a>
        </div>
        <p>
            PRIVACY <span>POLICY</span> | SITE<span>MAP</span>
        </p>
    </div> 
  );
}
export default Footer;
