import React from "react";
import {StaticImage} from 'gatsby-plugin-image'
import ContactButton from './contact';
import "./section.css";


const Section = ()=>{return(
    <div className="section">
        <div className="section-text">
            <h2> Letting, Rent Collection and Eviction Services </h2>
            <p> Put your feet up and relax with a quick and simple tenant management services </p>
            <ContactButton></ContactButton>
        </div>

        <StaticImage
            src="../images/Home1.svg"
            alt="An Vector Image of a House"
            placeholder="blurred"
            layout="fixed"
            objectFit="contain"
            className="section-image"
        ></StaticImage> 
        
    </div>
)}

export default Section;