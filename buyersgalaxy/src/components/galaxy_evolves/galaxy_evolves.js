import "./galaxy_evolves.css";
import React, { useState } from 'react';
import brief from '../../assets/icons/brief.png';
import buy from '../../assets/icons/buy.png';
import duedeligence from '../../assets/icons/duedeligence.png';
import inspect from '../../assets/icons/inspect.png';
import negotiate from '../../assets/icons/negotiate.png';
import search from '../../assets/icons/search.png';
import settle from '../../assets/icons/settle.png';
import shortlist from '../../assets/icons/shortlist.png';
import support from '../../assets/icons/support.png';
import SectionName from "../section-name/section-name";
const GalaxyEvolves = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    const getLineWidth = (step) => {
        switch(step) {
            case 1: return '11%';
            case 2: return '22%';
            case 3: return '33%';
            case 4: return '44%';
            case 5: return '55%';
            case 6: return '66%';
            case 7: return '77%';
            case 8: return '88%';
            case 9: return '100%';
            default: return '0%';
        }
    };

    return (
        <div id="our-galaxy">
            <SectionName name="How our Galaxy Evolves"/>
            <div className="process-wrapper" >
                <div id="progress-bar-container" data-aos="zoom-in-right">
                    <ul>
                        <li
                            className={`step step01 ${activeStep >= 1 ? 'active' : ''}`}
                            onClick={() => handleStepClick(1)}
                        >
                            <div className="step-inner"> 001</div>
                        </li>
                        <li
                            className={`step step02 ${activeStep >= 2 ? 'active' : ''}`}
                            onClick={() => handleStepClick(2)}
                        >
                            <div className="step-inner">002</div>
                        </li>
                        <li
                            className={`step step03 ${activeStep >= 3 ? 'active' : ''}`}
                            onClick={() => handleStepClick(3)}
                        >
                            <div className="step-inner">003</div>
                        </li>
                        <li
                            className={`step step04 ${activeStep >= 4 ? 'active' : ''}`}
                            onClick={() => handleStepClick(4)}
                        >
                            <div className="step-inner">004</div>
                        </li>
                        <li
                            className={`step step05 ${activeStep >= 5 ? 'active' : ''}`}
                            onClick={() => handleStepClick(5)}
                        >
                            <div className="step-inner">005</div>
                        </li>
                        <li
                            className={`step step06 ${activeStep >= 6 ? 'active' : ''}`}
                            onClick={() => handleStepClick(6)}
                        >
                            <div className="step-inner">006</div>
                        </li>
                        <li
                            className={`step step07 ${activeStep >= 7 ? 'active' : ''}`}
                            onClick={() => handleStepClick(7)}
                        >
                            <div className="step-inner">007</div>
                        </li>
                        <li
                            className={`step step08 ${activeStep >= 8 ? 'active' : ''}`}
                            onClick={() => handleStepClick(8)}
                        >
                            <div className="step-inner">008</div>
                        </li>
                        <li
                            className={`step step09 ${activeStep >= 9 ? 'active' : ''}`}
                            onClick={() => handleStepClick(9)}
                        >
                            <div className="step-inner">009</div>
                        </li>
                    </ul>

                    <div id="line">
                        <div id="line-progress" style={{ width: getLineWidth(activeStep) }}></div>
                    </div>
                </div>
                <div className="ge" data-aos="zoom-in-left">
                <div id="progress-content-section">
                    <div className={`section-content discovery ${activeStep === 1 ? 'active' : ''}`} >
                        <h2 >Brief</h2>
                        <img src={brief} alt="" />
                    </div>
                    <div className={`section-content strategy ${activeStep === 2 ? 'active' : ''}`} >
                        <h2>Search</h2>
                        <img src={search} alt="" />
                    </div>
                    <div className={`section-content creative ${activeStep === 3 ? 'active' : ''}`}>
                        <h2>Shortilst</h2>
                        <img src={shortlist} alt="" />
                    </div>
                    <div className={`section-content production ${activeStep === 4 ? 'active' : ''}`}>
                        <h2>Due Deligence</h2>
                        <img src={duedeligence} alt="" />
                    </div>
                    <div className={`section-content analysis ${activeStep === 5 ? 'active' : ''}`}>
                        <h2>Inspect</h2>
                        <img src={inspect} alt="" />
                    </div>
                    <div className={`section-content analysis ${activeStep === 6 ? 'active' : ''}`}>
                        <h2>Negotiate</h2>
                        <img src={negotiate} alt="" />
                    </div>
                    <div className={`section-content analysis ${activeStep === 7 ? 'active' : ''}`}>
                        <h2>Buy</h2>
                        <img src={buy} alt="" />                       
                    </div>
                    <div className={`section-content analysis ${activeStep === 8 ? 'active' : ''}`}>
                        <h2>Settle</h2>                        
                        <img src={settle} alt="" />
                    </div>
                    <div className={`section-content analysis ${activeStep === 9 ? 'active' : ''}`}>
                        <h2>Support</h2>
                        <img src={support} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GalaxyEvolves;
