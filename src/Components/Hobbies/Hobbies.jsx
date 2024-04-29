import React from "react";
import "./Hobbies.scss";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Hobbies = () => {

    const { ref: animatedRef, inView } = useInView({
    threshold: 0.5,
  });

  const animatedSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(0px) translateX(-100%)",
  });
  const animatedSpringRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(0px) translateX(100%)",
  });

  const travel =
    "https://travelsquire.com/ts/wp-content/uploads/2012/04/Traveling-Photo-by-Photo.jpg";
  const biking =
    "https://image.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg";
  const cricket = "https://wallpaperaccess.com/full/1088580.jpg";
  return (
    <div className="hobbies" ref={animatedRef} >
      <animated.h1 style={animatedSpring}>Hobbies</animated.h1>
      <animated.h3 style={animatedSpring}>
        Hobbies are not just pastimes; they're expressions of passion, avenues
        for creativity, and windows into self-discovery.
      </animated.h3>
      <animated.div class="quotes" style={animatedSpringRight}>
        <div class="card" >
          <div class="box box1" >
            <img src={travel} alt="" />
            <p>
              Traveling isn't just a hobby; it's a passion that fuels my soul
              with wanderlust. Exploring new destinations, immersing in diverse
              cultures, and capturing moments along the way are the essence of
              my adventurous spirit.
            </p>
            <h2>Traveling</h2>
          </div>
          <div class="bg"></div>
        </div>
        <div class="card" >
          <div class="box box2" >
            <img src={biking} alt="" />
            <p>
              
           Biking: it's an exhilarating journey that pushes boundaries and ignites my sense of adventure. Riding through scenic routes, feeling the rush of the wind, and embracing the freedom of the  road encapsulate the thrill of biking. 
            </p>
            <h2>Biking</h2>
          </div>
          <div class="bg"></div>
        </div>
        <div class="card" >
          <div class="box box3" >
            <img src={cricket} alt="" />

            <p>Cricket isn't just a sport; it's a passion that fuels camaraderie, competition, and a love for the game. From the crack of the bat to the thrill of taking a wicket, every moment on the field is a testament to the spirit of cricket. </p>
            <h2>Cricket</h2>
          </div>
          <div class="bg"></div>
        </div>
      </animated.div>
    </div>
  );
};

export default Hobbies;
