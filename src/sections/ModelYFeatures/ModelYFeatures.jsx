import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import "./ModelYFeatures.css";

// Import images (.jpg)
import RangeImg from "../../assets/images/modely-features/range.jpg";
import InteriorImg from "../../assets/images/modely-features/interior.jpg";
import AutopilotImg from "../../assets/images/modely-features/autopilot.jpg";
import SuperchargingImg from "../../assets/images/modely-features/supercharging.jpg";

const features = [
  {
    img: RangeImg,
    title: "Long Range",
    desc: "Go further with up to 330 miles of range on a single charge."
  },
  {
    img: InteriorImg,
    title: "Premium Interior",
    desc: "Spacious seating for up to 7 passengers with premium finishes."
  },
  {
    img: AutopilotImg,
    title: "Autopilot",
    desc: "Navigate on Autopilot with advanced safety and convenience features."
  },
  {
    img: SuperchargingImg,
    title: "Supercharging",
    desc: "Access Tesla’s global Supercharger network for fast, reliable charging."
  }
];

const ModelYFeatures = () => {
  return (
    // Added id for navbar section linking
    <motion.section
      id="modely-features"
      className="modely-features"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2>Performance & Lifestyle Highlights</h2>
      <div className="features-grid">
        {features.map((feature, i) => (
          <motion.div
            className="feature-card"
            key={i}
            variants={fadeInUp}
          >
            <img src={feature.img} alt={feature.title} className="feature-img"/>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ModelYFeatures;
