import React from 'react';

import './Stats.css';
import iconOne from './imgs/icon-one.png';
import icoTwo from './imgs/icon-two.png';
import iconThree from './imgs/icon-three.png';
import iconFour from './imgs/icon-four.png';

const Stats = () => {
    return (
        <div className="stats">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="stats__inner">
                            <img src={iconOne} alt="icon"/>
                            <span className='number'>2093</span>
                            <span>COMPLETED PROJECT</span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="stats__inner">
                            <img src={icoTwo} alt="icon"/>
                            <span className='number'>9 134 835</span>
                            <span>CLICK PRESED</span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="stats__inner">
                            <img src={iconThree} alt="icon"/>
                            <span className='number'>7143</span>
                            <span>MAILS SENTED & RECIVED</span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="stats__inner">
                            <img src={iconFour} alt="icon"/>
                            <span className='number'>427</span>
                            <span>JOKES TOLD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;













