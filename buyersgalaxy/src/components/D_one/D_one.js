import React from "react";
import "./D_one.css";
import downoad_img from '../../assets/images/download_img.png';
function D_one() {
  return (
    <div className="d-one">
        <p>Bran new 2025 Australia property invester edition</p>
        <h2>ACCESSS THE 8 UNKNOWN AND UNTAPPED</h2>
        <h2 className="underline">PROPERTY HOTSPOTS</h2> 
        <h2>TO INVEST IN <span className="underline">2025!</span></h2>
        <p>Over team have just come across these untapped hotspots and they are set to soar in 2025. The best part? Nobody ese is talikng about them... yet</p>
        <div className="download-section">
        <img className="download-img" src={downoad_img} alt="" />
        <div class="download-form container ">
          <div class="row">
            <div id="content">
              <form role="form">
                <input
                  type="text"
                  class="form-control"
                  name="usernumber"
                  id="usernumber"
                  required="required"
                  placeholder="Enter Your Full Name"
                />
                <input
                  type="email"
                  class="form-control"
                  name="userarea"
                  id="userarea"
                  required="required"
                  placeholder="Enter Your Email"
                />
                <input
                  type="text"
                  class="form-control"
                  name="userarea"
                  id="userarea"
                  required="required"
                  placeholder="Enter Your"
                />
                <input id="submit" type="submit" value="★ FREE DOWNLOAD" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default D_one;
