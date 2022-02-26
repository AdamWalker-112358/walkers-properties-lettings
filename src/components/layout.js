import React from "react";
import Navigation from "./navigation";
import Logo from './logo';
import Header from "./header";
import Main from "./main"
import Footer from "./footer";

const Layout = ( {children})=>{ 
  
    return(
    
    <div className="layout">
        <Header>
            <Logo></Logo>
            <Navigation></Navigation>
        </Header>
        <Main>{children}</Main>
        <Footer>
            <address>
                <ul>
                    <li>Walkers Properties and lettings</li>
                    <li>4 Sundridge Avenue, </li>
                    <li>Plaistow Lane, </li>
                    <li>Bromley, </li>
                    <li>Kent,</li>
                    <li>BR1 4DT</li>
                    <li><a href="tel:+442084666699">020 8466 6699</a></li>

                </ul>

                
                
                
                
                 
                
                

            </address>
            
            
        </Footer>

    </div>
)}

export default Layout