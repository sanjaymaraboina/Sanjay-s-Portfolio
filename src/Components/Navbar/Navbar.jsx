import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import facebook from "../../assets/icons8-github-50.png";
import youtube from "../../assets/icons8-linkedin-logo-50.png";
import instagram from "../../assets/icons8-instagram-50.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logoLeft">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        </div>
        <div className="nav-right">
          
          <div className="links">
          <a href="https://www.instagram.com/?hl=en" target="new"><img src={instagram} alt="" /></a>
          <a href="https://github.com/sanjaymaraboina" target="new"><img src={facebook} alt="" /></a>
          <a href="https://www.linkedin.com/in/sanjay-maraboina-6a3a342a6/" target="new"><img src={youtube} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
