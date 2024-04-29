import React from "react";
import { motion } from "framer-motion";
import "./Skills.scss";
import { skills } from "../Data/Data";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { DiReact,  DiCss3, DiBootstrap } from "react-icons/di";
import { SiCss3 } from "react-icons/si";

import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { RiHtml5Line } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";



const Skills = () => {
  const { ref: animatedRef, inView } = useInView({
    threshold: 0.5,
  });

  const animatedSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(0px) translateX(-500px)",
  });
  const animatedSpringRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(0px) translateX(1500px)",
  });

  return (
    <div className="Container" ref={animatedRef}>
      <animated.div className="Wrapper" style={animatedSpring}>
        <div className="Title">Skills</div>
        <div className="overview">
          <h1>Over View :</h1>
          <div className="Desc">
            "Over the past 5 Months, I've honed a versatile skill set in web
            development. Proficient in front-end technologies like React.js,
            Redux, and Material UI, I specialize in crafting intuitive user
            interfaces. I have expertise in HTML5 and CSS3 for responsive design.
            Continuously learning and adapting, I stay updated with emerging
            technologies to deliver cutting-edge solutions."
          </div>
        </div>
        <animated.div className="SkillsContainer" style={animatedSpring}>
          {skills.map((skill, index) => (
            <div className="Skill" key={index}>
              <div className="SkillTitle">{skill.title}</div>
              <div className="SkillList">
                {skill.skills.map((item, subIndex) => (
                  <motion.div
                    key={subIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    }}
                    className="SkillItem"
                  >
                    <img className="SkillImage" src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </animated.div>
      </animated.div>
      <animated.div className="rotaterSkills" style={animatedSpringRight}>
        <div className="rotaterSkillsInner">
          <div className="icon-container">
            <div className="icon-top">
              <DiReact size={60} color="rgb(18, 93, 113)"  />
            </div>
            <div className="icon-bottom">
              <DiBootstrap size={60} color="rgb(18, 93, 113)" />
            </div>
            <div className="icon-right">
              <TbBrandJavascript size={60} color="rgb(18, 93, 113)" />
            </div>
            <div className="icon-left">
              <SiCss3 size={60} color="rgb(18, 93, 113)" />
            </div>
           
            <div className="icon-side">
              <TbBrandRedux size={60} color="rgb(18, 93, 113)" />
            </div>
            <div className="icon-side1">
              <RiHtml5Line size={60} color="rgb(18, 93, 113)" />
            </div>
            <div className="icon-side2">
              <SiSass size={60} color="rgb(18, 93, 113)" />
            </div>
            <div className="icon-side3">
              <TbBrandTailwind size={60} color="rgb(18, 93, 113)" />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Skills;
