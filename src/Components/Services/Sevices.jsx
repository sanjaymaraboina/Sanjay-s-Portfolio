import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./Services.scss";
import userImg from "../../assets/userinterface2.jpg";
import responsiveImg from "../../assets/Responsive.jpg";
import clientImg from "../../assets/client1.jpg";
import performImg from "../../assets/perfomance1.jpg";


const About = () => {

  
  const { ref: animatedRef, inView } = useInView({
    threshold: 0.5,
  });

  const animatedSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(500px) translateX(500px)",
  });
  const animatedSpringLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(500px) translateX(-500px)",
  });

  return (
    <div className="services" ref={animatedRef} id="services">
      <animated.div className="textContainer" style={animatedSpring}>
        <p>
          I specialize in creating websites that help your <br />
          brand grow and move forward
        </p>
        <hr />
      </animated.div>
      <animated.div className="titleContainer" style={animatedSpringLeft}>
        
        <div className="title">
          <h1 className="animate-charcter">
            <b style={{ color: "orange" }}>Creative</b> Designs
          </h1>
          <h1>
            <b style={{ color: "orange" }}>For Your</b> Websites.
          </h1>
        </div>
        
      </animated.div>
      <animated.div className="containerImg" style={animatedSpring}>
        <animated.div className="card" style={animatedSpringLeft}>
          <div className="image">
            <img src={userImg} alt="" />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpringLeft}>
              <h2 style={{ color: "#009688" }}>User Interface (UI) Design</h2>
              <p>
                I collaborate with designers to craft visually appealing and
                user-friendly web interfaces using HTML, CSS, and JavaScript. My
                focus is on translating design mockups into responsive layouts
                and incorporating UI design principles for intuitive user
                experiences.
              </p>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className="card" style={animatedSpringLeft}>
          <div className="image">
            <img src={responsiveImg} alt="" />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpringLeft}>
              <h2 style={{ color: "#ff3e7f" }}>Responsive Web Design</h2>
              <p>
                I specialize in making websites and web apps responsive across
                different devices like smartphones, tablets, and desktops. By
                utilizing techniques such as media queries, flexbox, and CSS
                grid, I ensure a consistent user experience regardless of screen
                size or resolution.
              </p>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className="card" style={animatedSpring}>
          <div className="image">
            <img src={clientImg} alt="" />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpring}>
              <h2 style={{ color: "#03a9f4" }}>Client-Side Scripting</h2>
              <p>
                I'm skilled in JavaScript and popular frontend frameworks like
                React.js,Redux, Material UI Using these tools, I enhance web
                pages with interactivity, dynamic features like form validation,
                animations, and real-time updates. Leveraging JavaScript
                frameworks, I efficiently create complex user interfaces and
                single-page applications (SPAs).
              </p>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className="card" style={animatedSpring}>
          <div className="image">
            <img src={performImg} alt="" />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpring}>
              <h2 style={{ color: "#ffd700" }}>Performance Optimization</h2>
              <p>
                I focus on optimizing websites and web apps for speed and
                seamless user experiences. Utilizing techniques like code
                minification, bundling, lazy loading, and image optimization, I
                I leverage performance monitoring tools to pinpoint and resolve
                bottlenecks, ensuring optimal performance across devices and
                networks
              </p>
            </animated.div>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default About;
