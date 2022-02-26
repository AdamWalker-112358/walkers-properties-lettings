import React from "react";
import {Link} from "gatsby";
import ContactButton from "./contact";
import './navigation.css';




const Navigation = ()=> {return(
  <nav >
    <ul className="navigationStyles">
      <li> <Link to="/" activeClassName="active">Home</Link></li>
      <li> <Link to="/about" activeClassName="active">Landlords</Link></li>
      <li><ContactButton negative="true"></ContactButton></li>
    </ul>
  </nav>
)}

export default Navigation