import React from 'react';
import './Education.scss'; 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../Data/Data';
import EducationCard from './EducationCard';
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";


const Education = () => {

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
        <div id="education" ref={animatedRef}>
            <animated.div className="containers" >
                <div className="wrappers">
                    <animated.div className="titles" style={animatedSpring}>Education</animated.div>
                    <animated.div className="descs" style={animatedSpring}>
                        My education has been a journey of self-discovery and growth. My educational details are as follows.
                    </animated.div>
                    <animated.div className="timeline-section" style={animatedSpringRight}>
                        <Timeline>
                            {education.map((edu, index) => (
                                <TimelineItem key={edu.id}>
                                    <TimelineContent>
                                        <EducationCard education={edu}/>
                                    </TimelineContent>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" color="info"  />
                                        {index !== education.length  && <TimelineConnector style={{ background:"rgb(18, 93, 113)" }} />}
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

export default Education;
