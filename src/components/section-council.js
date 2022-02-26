import React from "react";
import {StaticImage} from 'gatsby-plugin-image'
import ContactButton from './contact';
import "./section.css";

const Section = ()=>{return(
    <div className="section">




        <div className="section-text">
            <h2> Property Management and Maintenance </h2>
            <p> Straight forward letting services from experience landlords experts in DSS and Council lettings </p>
            <ContactButton></ContactButton>
        </div>

        <StaticImage
            src="../images/Home3.svg"
            alt="An Vector Image of a House"
            placeholder="blurred"
            layout="fixed"
            objectFit="contain"
            className="section-image"
        ></StaticImage> 


    </div>
)}

export default Section;