import React from "react";
import "./about.css";
// import SectionName from '../section-name/section-name';
function About() {
  return (
    <div className="about-section" id="about">
      {/* <SectionName name="About Buyers Galaxy"/> */}
      <h1 data-aos="fade-down">
        <span className="underlines">About Buyers</span>Galaxy
      </h1>
      <p data-aos="flip-up">
        At Buyers Galaxy, we specialize in helping buyers confidently navigate
        Melbourne’s competitive property market. As Victoria’s trusted buyer’s
        agency, we bring insider knowledge from years of experience as real
        estate sales associates and auction specialists. This expertise allows
        us to understand vendor strategies, recognize fair property prices, and
        negotiate with an edge that benefits you.
      </p>
      <div className="makes-differ">
        <span data-aos="fade-down">Waht Makes Us Different ?</span>
        <ul>
            <li data-aos="flip-up"><b>Investor-First Approach: </b>We assess every property with a focus on long-term wealth creation. Whether you’re buying to live in or invest, we ensure your purchase adds value.</li>
            <li data-aos="flip-up"><b>Insider Knowledge: </b>Our deep understanding of how real estate agents and vendors think gives you a unique advantage in securing the best deals.</li>
            <li data-aos="flip-up"><b>Industry Connections: </b>Leveraging our extensive network, we uncover opportunities others miss and ensure smooth transactions.</li>
            <li data-aos="flip-up"><b>Stress-Free Journey: </b>From due diligence to negotiation, we simplify the process, so you can focus on your goals without feeling overwhelmed.</li>
        </ul>
      </div>
      <p data-aos="flip-up">
        At Buyers Galaxy, your success is our priority. Let us guide you to
        properties that aren’t just homes but strategic investments for your
        future.
      </p>
    </div>
  );
}
export default About;
