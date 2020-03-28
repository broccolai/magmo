import React, { Component } from 'react';
import Footer from '../components/global/Footer';
import Head from '../components/global/Head';
import Header from '../components/global/Header';
import About from '../components/index/About';
import Intro from '../components/index/Intro';
import Projects from '../components/index/Projects';
import Splash from '../components/index/Splash';

export default class Index extends Component {
    render() {
        return (
            <>
                <Head title="Home" />
                <Header />
                <Splash />
                <Intro />
                <Projects />
                <About />
                <Footer background="none" />
            </>
        );
    }
}
