import React from 'react';

import './Phone.css';
import phone from './imgs/phone.png';

const Phone = () => {
    return (
        <div className="phone">
            <div className="container">
                <div className="row">
                    <div className="col-2 col-md-6">
                        <div className="phone__mobile text-center">
                            <img className='img-fluid' src={phone} alt="phone"/>
                        </div>
                    </div>
                    <div className="col-10 col-md-6">
                        <div className="phone__info">
                            <div className="phone__info__title">
                                Fully Responsive
                            </div>
                            <div className="phone__info__subtitle">
                                Eum cu tantas legere complectitur, hinc utamur ea eam. Lorem ipsum dolor sit amet, volumus temporibus definitionem id ius, vel ut magna timeam appareat, movet timeam maiorum an ius.
                                Sea libris dictas lucilius et. Ne cibo urbanitas pri, qui ad populo accusamus. Quod congue ea ius, nisl aperiri sit ut.
                            </div>
                            <div className="phone__info__btn">
                                <a href="/">ORDER ME ONE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;













