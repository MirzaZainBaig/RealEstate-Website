import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contactPage/contactPage';
import Footer from './components/footer/footer';
import DownloadPage from './pages/downloadPage/downoadPage';
import LandingPage from './pages/landingPage/landingPage';
import HomeBuyers from './pages/homeBuyers/homebuyers';
import LandPurchases from './pages/landpurchases/landpurchases';
import DueDeligence from './pages/duedeligence/duedeligence';
import InvestmentProperties from './pages/Investmentproperties/investmentproperties';
import ContactBar from './components/contactbar/contactbar';
// import NaveBar from './components/NaveBar/NaveBar';
function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="download" element={<DownloadPage />} />
                <Route path="/services/home-buyers" element={<HomeBuyers />} />
                <Route path="/services/land-purchases" element={<LandPurchases />} />
                <Route path="/services/due-deligence" element={<DueDeligence />} />
                <Route path="/services/investment-properties" element={<InvestmentProperties />} />
            </Routes>
        </Router>
      <Footer/>
      {/* <ContactBar/> */}
    </div>
  );
}

export default App;
