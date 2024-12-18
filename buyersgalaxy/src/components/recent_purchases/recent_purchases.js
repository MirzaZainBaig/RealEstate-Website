import React from "react";
import "./recent_purchases.css";
import SectionName from "../section-name/section-name";
function RecentPurchases() {
  return (
    <div id="recent_purchases">
      <SectionName name="Recent Purchases"/>
      <div className="recent_purchases" data-aos="flip-down">
          <div className="img"></div>
          <div className="purchases">
              <h2>Real time communication and fast data services</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea fuga neque ab distinctio vitae voluptate, maiores laboriosam eligendi facere, 
                  dolor molestiae alias omnis similique iusto a magni cumque modi.</p>
          </div>
      </div>
      <div className="recent_purchases" data-aos="flip-down" >
          <div className="img"></div>
          <div className="purchases">
              <h2>Real time communication and fast data services</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea fuga neque ab distinctio vitae voluptate, maiores laboriosam eligendi facere, 
                  dolor molestiae alias omnis similique iusto a magni cumque modi.</p>
          </div>
      </div>
    </div>
  );
}
export default RecentPurchases;
