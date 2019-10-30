import React, { Component, Fragment } from 'react';

import './App.css';
import Header from '../Header/Header';
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Browser from "../Browser/Browser";
import Phone from "../Phone/Phone";
import Portfolio from "../Portfolio/Portfolio";
import Stats from "../Stats/Stats";
import Team from "../Team/Team";
import Quote from "../Quote/Quote";
import News from "../News/News";
import About from "../About/About";
import Add from "../Add/Add";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default class App extends Component {

    state = {
        dataLink: [
            {name: 'HOME', id: 1},
            {name: 'SERVICES', id: 2},
            {name: 'PORTFOLIO', id: 3},
            {name: 'ABOUT', id: 4},
            {name: 'CONTACT', id: 5},
        ]
    };

    render() {
        const { dataLink } = this.state;
        return (
            <Fragment>
                <Header dataLink={ dataLink } />
                <Hero />
                <Services />
                <Browser />
                <Phone />
                <Portfolio />
                <Stats />
                <Team />
                <Quote />
                <News />
                <About />
                <Add />
                <Clients />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}
