import React from 'react';
import './navbar.css'
const NavBar = () => {
return(
 <React.Fragment>
     <nav id = "navbar">
                <input type="checkbox" id="check"/>
                     <label for="check" className="checkbtn">
                        <i className="fa fa-bars bars-styling"></i>
                        </label>
                    
            
        
                    <ul className="ul--navlinks">
                        <li><a href ="#aboutme">ABOUT ME </a></li>
                        <li><a href ="#projects">PROJECTS</a></li>
                        <li><a href ="#resume">RESUME</a></li>
                        <li><a href ="#contact">CONTACT</a></li>
                    </ul>
                   
                </nav>
                
 </React.Fragment>
)
}
export default NavBar