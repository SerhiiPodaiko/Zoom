import React from 'react';

import './Browser.css';
import browser from './imgs/browser.png';


const Browser = () => {
    return (
        <div className="browser">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-center">
                        <div className="browser__title">
                            The Design That Likes To Say Yes.
                        </div>
                        <div className="browser__subtitle">
                            Eum cu tantas legere complectitur, hinc utamur ea eam.
                            Eum patrioque mnesarchum eu, diam erant convenire et vis.
                            Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="browser__img text-center">
                            <img className='img-fluid' src={browser} alt="browser"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Browser;













