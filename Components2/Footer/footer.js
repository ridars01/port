import React from 'react'
import './footer.css'
class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <hr className = "footer-divider"/>
                <footer id="main-footer">
        <ul class="footerpages">
                        <li><a href ="#aboutme">ABOUT ME </a></li>
                        <li><a href ="#projects">PROJECTS</a></li>
                        <li><a href ="#resume">RESUME</a></li>
                        <li><a href ="#contact">CONTACT</a></li>
        </ul>
        <div class="social">
            <a class="social-icon divider" href="https://www.instagram.com/" target="_blank" rel="noopener"><i
                    class="fab fa-instagram"></i></a>
            <a class="social-icon" href="https://www.linkedin.com/in/rida-fatimah-csm-certified-1236261aa/" target="_blank" rel="noopener"><i
                    class="fab fa-linkedin-in"></i></a>
        </div>
        <p>Rida Fatimah Portfolio &copy; 2020, All Rights Reserved</p>
        <p>Last Updated July 2020</p>

        <a class="arrow" href="#"><i class="fas fa-arrow-up"></i></a>

    </footer>
            </React.Fragment>
        )
    }
}

export default Footer 