import React from "react";
import {StaticImage} from 'gatsby-plugin-image'

const Logo = ()=>{ return(
    <StaticImage 
    alt="Walkers Proprety and Lettings Logo" 
    src="../images/Logo.svg"
    width="150px"
    height="50px"
    objectFit="contain"
    ></StaticImage>
)}

export default Logo