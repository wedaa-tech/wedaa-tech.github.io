import React from 'react';
import "./hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
          <span className="yellowText">WELL DEFINED APPLICATION & ARCHITECTURE</span>
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Bridging <br />
              Design & <br />
              Development
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Imagine building your application architecture <br />using an intuitive visual design canvas.</span>
            <span>Once you're done with your design, WeDAA seamlessly transforms it <br />into complete full-stack source code.</span>
          </div>
          <button className="button">
              <a href="">Products</a>
            </button>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={require('@site/static/myproject.webp').default} alt="houses"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
