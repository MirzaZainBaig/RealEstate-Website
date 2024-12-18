import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
class Navbar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <>
            <nav>
                <a href="./index.html"><img src={logo} alt="logo" /></a>
                <div>
                    <ul id='menu_links' className={this.state.clicked?"#navbar active" : "#navbar"}>
                        <li><NavLink to="/" >⬅️ Back To Home</NavLink></li>
                        <li><NavLink to="/download" >Property Insights</NavLink></li>
                        <li><NavLink to="/services/home-buyers" >S1-Home Buyers</NavLink></li>
                        <li><NavLink to="/services/investment-properties" >S2-Investment Properties</NavLink></li>
                        <li><NavLink to="/services/land-purchases" >S3-Land Purchases</NavLink></li>
                        <li><NavLink to="/services/due-deligence" >S4-Due Deligence</NavLink></li>
                        <li><NavLink to="/contact" >Contact Us</NavLink></li>
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
            </>
        );
    }
}
export default Navbar;