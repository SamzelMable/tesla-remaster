import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { fadeInUp, fadeIn } from "../../utils/animations";
import "./Hero.css";

const Hero = () => {
  const { scrollY } = useViewportScroll();

  // Parallax values — tweak these multipliers to control depth
  const yText = useTransform(scrollY, [0, 300], [0, -100]);
  const yBg = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.6]);

  return (
    <section id="hero" className="hero">
      {/* Parallax Background */}
      <motion.video
        className="hero-bg"
        src="/assets/videos/tesla-hero.mp4"
        autoPlay
        muted
        loop
        style={{ y: yBg, opacity }}
      />

      {/* Foreground Content */}
      <motion.div
        className="hero-content"
        style={{ y: yText }}
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        <h1>Model Y</h1>
        <p>Order Online for Touchless Delivery</p>
      </motion.div>

      <motion.div
        className="hero-buttons"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <button className="btn primary" onClick={() => window.open("https://www.tesla.com/model3/design#overview", "_blank")}>Custom Order</button>
        <button className="btn secondary" onClick={() => window.open("https://www.tesla.com/current-offers", "_blank")}>Existing Inventory</button>
      </motion.div>
    </section>
  );
};

export default Hero;
