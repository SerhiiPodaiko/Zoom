import React from 'react';

import './Services.css';
import web from './imgs/web.png';
import design from './imgs/design.png';
import programming from './imgs/programming.png';
import photo from './imgs/photo.png';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="services_inner text-center">
                            <img src={web} alt="web"/>
                            <h4>WEB DESIGN</h4>
                            <p>
                                Eum cu tantas legere complectitur.
                                Tantas legere complectitur, hinc utamur ea eam ustolion mplectitur, hinc utal.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="services_inner text-center">
                            <img src={design} alt="design"/>
                            <h4>GRAPHIC DESIGN</h4>
                            <p>
                                Eum cu tantas legere complectitur, hinc utamur ea eaum cu tantas legere complectitur.
                                Tantas legere complectitur
                                ustolion mplectitur, hinc utal.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="services_inner text-center">
                            <img className='services_inner__img' src={programming} alt="programming"/>
                            <h4>PROGRAMMING</h4>
                            <p>
                                Eum cu tantas legere complectitur.
                                Tantas legere complectitur, hinc utamur ea eam ustolion mplectitur, hinc utal.
                            </p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-3">
                        <div className="services_inner text-center">
                            <img src={photo} alt="photo"/>
                            <h4>PHOTOGRAPHY</h4>
                            <p>
                                Eum cu tantas legere complectitur.
                                Tantas legere complectitur, hinc utamur ea eam ustolion mplectitur, hinc utal.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="service-btn">
                            <a href="/">NEED SERVICE?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;













