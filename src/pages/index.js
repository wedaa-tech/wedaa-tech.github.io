import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Footer from "@site/src/components/Footer";
import GetStarted from "@site/src/components/GetStarted";
import Header from "@site/src/components/Header";
import Hero from "@site/src/components/Hero";
import Blogs from "@site/src/components/Blogs";
import Value from "@site/src/components/Value";

export default function Home() {
  useDocusaurusContext();
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Value/>
      <Blogs/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}
