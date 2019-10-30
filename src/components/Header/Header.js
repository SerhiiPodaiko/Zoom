import React from 'react';

import './Header.css';
import logo from './imgs/logo.png';


const Header = ({ dataLink }) => {

    const link = dataLink.map((el, index) => {
        return (
            <div>
                <a key={index.id} href="/">{el.name}</a>
            </div>
        );
    });

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-12 col-lg-2">
                        <div className="logo">
                            <img src={logo} alt="Logo" title='Logo'/>
                        </div>
                    </div>
                    <div className="col-6 col-sm-12 col-lg-8 offset-lg-2">
                        <nav className='menu'>
                            {link}
                        </nav>
                        <div className='hamburger'><a className='hamburger-menu' href="/"><span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;













