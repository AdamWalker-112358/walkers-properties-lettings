import React from "react";
import {Link} from "gatsby";
import './navigation.css';




const Navigation = ()=> {return(
    <nav >
    <ul className="navigationStyles">
        <li> <Link to="/">Home Page</Link></li>
        <li> <Link to="/about">About Page</Link></li>
        <li> <Link to="/blog">Blog Page</Link></li>
    </ul>
  </nav>
)}

export default Navigation