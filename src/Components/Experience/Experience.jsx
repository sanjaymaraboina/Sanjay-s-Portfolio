import React from 'react';
import './Experience.scss'; 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../Data/Data';
import ExperienceCard from './ExperienceCard'
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";


const Experience = () => {

    const { ref: animatedRef, inView } = useInView({
        threshold: 0.5,
      });
    
      const animatedSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) translateX(0)"
          : "translateY(0px) translateX(1500px)",
      });
      
      const animatedSpringRight = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) translateX(0)"
          : "translateY(0px) translateX(-1500px)",
      });

    return (
        <div id="experience" ref={animatedRef}>
            <animated.div className="container-Experience" >
                <div className="wrappers-Experience">
                    <animated.div className="title-head" style={animatedSpring}>Experience</animated.div>
                    <animated.div className="descriptions" style={animatedSpring}>

                    "My journey of self-discovery and growth has been shaped by diverse experiences                    </animated.div>
                    <animated.div className="timeline-section1" style={animatedSpringRight}>
                        <Timeline>
                            {experiences.map((exp, index) => (
                                <TimelineItem key={exp.id}>
                                    <TimelineContent>
                                        <ExperienceCard experiences={exp}/>
                                    </TimelineContent>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" color="info"  />
                                        {index !== experiences.length  && <TimelineConnector style={{ background:"rgb(18, 93, 113)" }} />}
                                    </TimelineSeparator>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </animated.div>
                </div>
            </animated.div>
           
        </div>
    );
}

export default Experience;
