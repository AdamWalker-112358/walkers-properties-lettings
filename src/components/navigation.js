import React from "react";
import {Link} from "gatsby";
import {navigationStyles} from './'




const Navigation = ()=> {return(
    <nav >
    <ul className={navigationStyles}>
        <li> <Link to="/">Home Page</Link></li>
        <li> <Link to="/about">About Page</Link></li>
    </ul>
  </nav>
)}

export default Navigation