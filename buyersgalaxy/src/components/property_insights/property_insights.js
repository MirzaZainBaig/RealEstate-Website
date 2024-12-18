import React from "react";
import './property_insights.css';
import { Link } from 'react-router-dom';
import SectionName from "../section-name/section-name";
// import propertyinsight1 from '../../assets/images/propertyinsight1.png';
// import propertyinsight2 from '../../assets/images/propertyinsight2.png';
function PropertyInsights (){
    return(
        <div id="property_insights">
            <SectionName name="Essential Melbourne Property Insights"/>
            <div className="propertypnsights">
            <div className="propertypnsights_imgaes" data-aos="zoom-in-left">
                <div className="propertypnsights1"></div>
                <div className="propertypnsights1 propertypnsights2"></div>
                {/* <img className="propertyinsight2" src={propertyinsight2} alt="" /> */}
            </div>
            <div className="propertypnsights_content" data-aos="zoom-in-right">
                <h5>Want Exclusive Insights into Melbourne’s Best Investment Suburbs?</h5>
                <p>Download our FREE Guide: “Melbourne’s Underdog Suburbs: Hidden Investment Gems for 2025” for an in-depth look at the 5 key suburbs you should consider for your next investment.</p>
                <p>Unlock the full potential of Melbourne's underdog suburbs by getting expert advice directly from the team at Buyers Galaxy.</p>
                <p>Don’t miss out on these hidden opportunities! Enter your details below to get immediate access to our exclusive property investment guide.</p>
                <Link to="/download" className="con-btn">Download Your Free Guide Now</Link>
            </div>
            </div>
        </div>
    );
}
export default PropertyInsights;