import React from "react";
import Navigation from "./navigation";

const Layout = ( {pageTitle, children})=>{ return(
    
    <div>
        <title> {pageTitle} </title>
        <Navigation></Navigation>
        <h1> {pageTitle} </h1>
        {children}
    </div>
)}

export default Layout