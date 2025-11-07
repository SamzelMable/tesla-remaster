import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <p>© 2025 Tesla Remaster — Built for Practice</p>
    </motion.footer>
  );
};

export default Footer;
