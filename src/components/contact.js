import React from "react";
import {Link} from "gatsby";
import "./contact.css";

const ContactButton = ({negative})=> { return(
    negative? <Link to="/contact" className="negative-contact-button" >Contact</Link> :  <Link to="/contact" className="contact-button" id="contact-button" >Contact</Link> 
    
)}




export default ContactButton