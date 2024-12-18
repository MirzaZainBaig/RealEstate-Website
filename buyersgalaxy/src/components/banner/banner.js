import React from 'react';
// import bannerimg from '../../assets/images/bannerimg.png';
import { Link } from 'react-router-dom';
import './banner.css';
function Banner(){
    return(
        <div id="hero">
            <div className="content">
                <h3>Buyers Agent in Melbourne</h3>
                <h2>Buyers Galaxy</h2>
                <hr />
                <p>Engagae a buyers agent in melbourne that is on your side</p>
                <Link to="/contact" className="con-btn">Contact Us</Link>
            </div>
        </div>
    );
} 
export default Banner;
