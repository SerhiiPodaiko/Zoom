import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                   <div className="col-12 text-center">
                       <div className="contact-title">
                           Contact Us
                       </div>
                       <div className="col-12 col-md-8 offset-md-2">
                           <div className="contact-subtitle">
                               Eum cu tantas legere complectitur, hinc utamur ea eam.
                               Eum patrioque mnesarchum eu, diam erant convenire et vis.
                               Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.
                           </div>
                       </div>
                   </div>
                    <div className="col-sm-4 offset-sm-2">
                        <div className="form">
                            <input type="text" placeholder='Yor name here'/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form">
                            <input type="email" placeholder='Yor mail here'/>
                        </div>
                    </div>
                    <div className="col-sm-8 offset-sm-2">
                        <div className="form">
                            <input id='message' type="text" placeholder='Yor message here'/>
                        </div>
                    </div>
                    <div className="col-6 col-sm-2 offset-sm-8">
                        <div className="form">
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;













