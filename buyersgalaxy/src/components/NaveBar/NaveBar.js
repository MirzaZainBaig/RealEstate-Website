import './NaveBar.css'
import logo from '../../assets/images/logo.png';
import { Link } from "react-scroll";
import { Component } from 'react';
class NaveBar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <div className='navbar'>
                <nav data-aos="fade-down" >
                    <a href="./index.html"><img src={logo} alt="logo" /></a>
                    <div>
                        <ul id='menu_links' className={this.state.clicked?"#navbar active" : "#navbar"}>
                            <li><a href="3"><Link to="hero" smooth={true} duration={500}>Home</Link></a></li>
                            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
                            <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                            <li><Link to="our-galaxy" smooth={true} duration={500}>Our Galaxy</Link></li>
                            <li><Link to="property_insights" smooth={true} duration={500}>Property Insights</Link></li>
                            <li><Link to="recent_purchases" smooth={true} duration={500}>Recent Purchases</Link></li>
                            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
                            <li className='btn'><a href="https://calendly.com/buyersgalaxy/30min?month=2024-11">Book a Call</a></li>
                        </ul>
                    </div>
                    <div id='mobile' onClick={this.handleClick}>
                        <i 
                        id='bar' 
                        className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                        ></i>
                    </div>
                </nav>
            </div>
        );
    }
}
export default NaveBar;