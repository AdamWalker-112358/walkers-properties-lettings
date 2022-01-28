import React from "react";
import Navigation from "./navigation";
import Section from "./section"
import "./layout.css";

const Layout = ( {pageTitle, children})=>{ return(
    
    <div className="layout">
        <title> {pageTitle} </title>
        <Navigation></Navigation>
        <div className="main-container">
        <Section><h1> {pageTitle} </h1></Section>
        <Section>{children}</Section>
            
            
        </div>

    </div>
)}

export default Layout