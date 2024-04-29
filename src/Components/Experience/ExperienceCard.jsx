import React from 'react';
import './ExperienceCard.scss'; 

const ExperienceCard = ({ experiences }) => {

    return (
        <div className="card1" >
            <div className="top">
                <img className="imageImg" src={experiences.image} alt="Company Logo" />
                <div className="body">
                    <div className="role">{experiences.role}</div>
                    <div className="company">{experiences.company}</div>
                    <div className="date">{experiences.date}</div>
                </div>
            </div>
            <div className="description">
                {experiences.desc && <div className="desc">{experiences.desc}</div>}
                {experiences.skills && 
                    <div className="skills">
                        <b>Skills:</b>
                        <ul>
                            {experiences.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
            {experiences.doc &&
                <a href={experiences.doc} target="_blank" rel="noopener noreferrer">
                    View Document
                </a>
            }
        </div>
    );
}

export default ExperienceCard;
