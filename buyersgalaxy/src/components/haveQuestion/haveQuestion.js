import React from 'react';
import './haveQuestion.css';
import { Link } from 'react-router-dom';
import SectionName from '../section-name/section-name';
// import { Link } from "react-scroll";


function HaveQuestion(){
    return( 
        <div id='contact'>
        <SectionName name="Contact Us"/>
        <div className="q_box">
            <div className="inner-container" data-aos="fade-down">
                <h2>Have a Question</h2>
                <Link to="/contact" className="con-btn">Contact Us</Link>
            </div>
        </div>
        </div>
    );
} 
export default HaveQuestion;
