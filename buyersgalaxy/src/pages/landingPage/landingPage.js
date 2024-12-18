import React from 'react';
import Banner from '../../components/banner/banner';
import About from '../../components/about/about';
import Services from '../../components/services/services';
import HaveQuestion from '../../components/haveQuestion/haveQuestion';
import RecentPurchases from '../../components/recent_purchases/recent_purchases';
import Galaxy_Evolves from '../../components/galaxy_evolves/galaxy_evolves';
import PropertyInsights from '../../components/property_insights/property_insights';
import NaveBar from '../../components/NaveBar/NaveBar';
function LandingPage() {
  return (
    <div data-aos="fade-in">
      <NaveBar/>
      <Banner/>
      <About/>
      <Services/>
      <Galaxy_Evolves/>
      <PropertyInsights/>
      <RecentPurchases/>
      <HaveQuestion/>
    </div>
  );
}

export default LandingPage;
