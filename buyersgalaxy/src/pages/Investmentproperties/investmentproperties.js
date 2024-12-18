import React from "react";
import Navbar from "../../components/navbar/navbar";
import homebuyers from '../../assets/images/homebuyers.png';
import { Link } from "react-router-dom";
function InvestmentProperties(){
    return(
        <>
        <Navbar/>
        <div data-aos="fade-in">
        <div className="services_banner"></div>
        <div className="services_info">
            <img src={homebuyers} alt="" />
            <div className="service_img_detail">
                <h2>Investment Properties Service</h2>
                <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iusto eum repellendus maiores dolorem explicabo? Reprehenderit quo, temporibus sunt omnis pariatur alias voluptatum ipsam ipsum quas officia neque doloribus culpa. adipisicing elit. Pariatur doloremque dolorem in eveniet nesciunt iure molestias hic expedita magni architecto dicta dignissimos, cumque eius perferendis. Cumque magnam perferendis asperiores ea!</p>
                <Link to="/contact" className="con-btn">Get a House Now</Link>
            </div>
        </div>
        <div className="services_details"></div>
        </div>
        </>
    );

}
export default InvestmentProperties;