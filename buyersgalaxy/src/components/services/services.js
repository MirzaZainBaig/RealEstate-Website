import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';
import SectionName from '../section-name/section-name';
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';
function Services(){
    return(
        <div className='services-section' id='services'>
            <SectionName name="Our Services"/>
            <div className="services" data-aos="flip-down">
                <div className='cards' data-aos="zoom-in-down">
                    <img src={icon1} alt="icon1" />
                    <h5>Home Buyers</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima nisi quasi quas </p>
                    <Link to="/services/home-buyers" className="con-btn">Explore Now</Link>
                </div> 
                <div className='cards' data-aos="zoom-in-down">
                    <img src={icon2} alt="icon1" />
                    <h5>Investment Properties</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima nisi quasi quas </p>
                    <Link to="/services/investment-properties" className="con-btn">Explore Now</Link>
                </div> 
                <div className='cards' data-aos="zoom-in-up">
                    <img src={icon3} alt="icon1" />
                    <h5>Land Purchases</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima nisi quasi quas </p>
                    <Link to="/services/land-purchases" className="con-btn">Explore Now</Link>
                </div> 
                <div className='cards' data-aos="zoom-in-up">
                    <img src={icon4} alt="icon1" />
                    <h5>Due Deligence</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima nisi quasi quas </p>
                    <Link to="/services/due-deligence" className="con-btn">Explore Now</Link>
                </div> 
            </div>
        </div>
    );
} 
export default Services;
