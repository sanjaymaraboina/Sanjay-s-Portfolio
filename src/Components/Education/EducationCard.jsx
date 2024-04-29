
import React from 'react';
import './EducationCard.scss'; 


const EducationCard = ({ education }) => {

   

    

    return (
        <div className="cards" >
            <div className="top">
                <img className="imageImg" src={education.img} alt="School Logo" />
                <div className="body">
                    <div className="name">{education.school}</div>
                    <div className="degree">{education.degree}</div>
                    <div className="date">{education.date}</div>
                </div>
            </div>
            <div className="grade"><b>Grade:</b> {education.grade}</div>
            <div className="description">{education.desc}</div>
        </div>
    );
}

export default EducationCard;
