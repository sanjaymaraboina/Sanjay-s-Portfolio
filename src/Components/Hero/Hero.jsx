import React from "react";

import "./Hero.scss";
import apiImage from "../../assets/webdev.webp";
import scrollImage from "../../assets/scroll.png";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";



const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};
const coloredTextVariants = {
  animate: {
    color: ["#c1651a "],
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  const { ref: animatedRef, inView } = useInView({
    threshold: 0.5,
  });

  const animatedSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(500px) translateX(100%)",
  });
  const animatedSpringLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(500px) translateX(-100%)",
  });

  return (
    <div>
      <div className="hero" ref={animatedRef}>
        <div className="wrapper">
          <animated.div style={animatedSpringLeft} className="textContainer">
            <animated.h2 style={animatedSpringLeft}>
              Hey,I'm Sanjay Maraboina
            </animated.h2>

            <animated.div
              style={animatedSpringLeft}
              className="animate-charcter"
            >
              <animated.span variants={coloredTextVariants}>
                Web developer
              </animated.span>{" "}
              and{" "}
              <animated.span variants={coloredTextVariants}>
                UI developer
              </animated.span>
            </animated.div>
            <animated.div style={animatedSpringLeft} className="buttons">
              <animated.button style={animatedSpringLeft}>
               See the Latest Works
               
              </animated.button>
              <animated.button style={animatedSpringLeft}>
                Contact Me
              </animated.button>
            </animated.div>
            <animated.img
              style={animatedSpringLeft}
              animate="scrollButton"
              src={scrollImage}
              alt=""
            />
          </animated.div>
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Web Developer
        </motion.div>
        <animated.div
          className="imageContainer"
          style={animatedSpring}
        >
          <animated.img src={apiImage} alt="" />
        </animated.div>
      </div>

      
    </div>
  );
};

export default Hero;
