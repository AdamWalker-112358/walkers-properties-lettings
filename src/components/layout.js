import React from "react";
import Navigation from "./navigation";
import Section from "./section"
import "./layout.css";
import {StaticImage} from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ( {pageTitle, children})=>{ 
    
    const data = useStaticQuery( graphql`
        query {
            site {
            siteMetadata {
                title
                tabText
                siteUrl
            }
            }
        }
      `)

    const {siteUrl, title, tabText} = data.site.siteMetadata;
    
    return(
    
    <div className="layout">
        <title> {tabText} </title>
        <Section><Navigation></Navigation></Section>
        <div className="main-container">
        <Section>
            <h1> {pageTitle || title} </h1>
            <Link src={siteUrl}>{siteUrl}</Link>
            <StaticImage alt="Hero image of a house" src="https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1"></StaticImage>
        
        </Section>
        <Section>{children}</Section>
            
            
        </div>

    </div>
)}

export default Layout