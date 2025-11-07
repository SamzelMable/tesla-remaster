import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import Logo from '../../assets/images/tesla-logo.png';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Tesla Logo" />
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#modely-features">Features</a></li>
        <li><a href="#showcase">Model Y</a></li>
        <li><a href="#supercharger">Supercharger</a></li>
      </ul>

      {/* Hamburger */}
      {!menuOpen && (
        <div className="navbar-hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
      )}


      {/* Mobile Menu */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      ref={menuRef}
      className="mobile-menu"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
    >
      <button className="close-btn" onClick={closeMenu}>✕</button>
      <ul>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#modely-features" onClick={closeMenu}>Features</a></li>
        <li><a href="#showcase" onClick={closeMenu}>Model Y</a></li>
        <li><a href="#supercharger" onClick={closeMenu}>Supercharger</a></li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;
