import React, { Component } from "react";
import dynamic from "next/dynamic";
import Head from "../components/global/Head"

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/global/Header"
import Splash from "../components/index/Splash"
import Intro from "../components/index/Intro"
import Projects from "../components/index/Projects"
import About from "../components/index/About"
import Footer from "../components/global/Footer"

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <>
        <Head title='Home' />
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