import React from "react";
import {StaticImage} from 'gatsby-plugin-image'
import ContactButton from './contact';
import "./section.css";


const Section = ()=>{return(
    
    <div className="section">

        <StaticImage
            src="../images/Home2.svg"
            alt="An Vector Image of a House"
            placeholder="blurred"
            layout="fixed"
            objectFit="contain"
            className="section-image"
        ></StaticImage> 


        <div className="section-text">
            <h2> Experienced Council Long Term Letting Consultants and Agent </h2>
            <p> Experts in long term lettings to london councils with assured rent payments above market prices and with zero hassle </p>
            <ContactButton></ContactButton>
        </div>


    </div>
)}

export default Section;