import React from "react";
import "./contactbar.css";
import enqiry from '../../assets/icons/enquiry.png'
import call from '../../assets/icons/call.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import tour from '../../assets/icons/tour.png'
function ContactBar() {
  return (
    <div className="contactbar" data-aos="fade-up">
        <div className="div1">
            <img src={enqiry} alt="" />
            <p>Enquiry</p>
        </div>
        <hr />
        <div className="div1">
            <img src={call} alt="" />
            <p>Call</p>
        </div>
        <hr />
        <div className="div1">
            <img src={whatsapp} alt="" />
            <p>Whatsapp</p>
        </div>
        <hr />
        <div className="div1">
            <img src={tour} alt="" />
            <p>3D Tour</p>
        </div>

    </div> 
  );
}
export default ContactBar;
