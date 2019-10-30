import React from 'react';

import './Add.css';
import phone from './imgs/phone.png';

const Add = () => {
    return (
        <div className="add">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-4">
                        <div className="add__phone text-right">
                            <img className='img-fluid' src={phone} alt="phone"/>
                        </div>
                    </div>
                    <div className="col-9 col-md-7 offset-md-1">
                        <div className="add__info">
                            <h4>MODERN DESIGN</h4>
                            <h6>Responsive Design</h6>
                            <p>
                                Eum cu tantas legere complectitur, hinc utamur ea eam.
                                Eum patrioque mnesarchum eu, diam erant convenire et vis.
                                Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.
                                Eum cu tantas legere complectitur, hinc utamur ea eam.
                                Ynesarchum eu, diam erant convenire et vis.
                                Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;













