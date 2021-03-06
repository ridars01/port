import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import navbar from './projectImgs/navbar.jpg';
import { Button, Modal} from 'react-bootstrap';




class Navbarpro extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <React.Fragment>
                
                        <div onClick={() => { this.handleModal() }}><img src={navbar} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={navbar} />

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Navigation created using CSS animations</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>Semantic HTML</li>
                                        <li>CSS Animations</li>
                                        <li>Javascript</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>


                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/js-navbar-unsolved" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://animatednavbarridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Navbarpro