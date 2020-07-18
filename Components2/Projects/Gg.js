import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import guessingGame from './projectImgs/guessingGame.jpg';
import { Button, Modal} from 'react-bootstrap';




class Gg extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={guessingGame} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={guessingGame} />

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Guessing Game app using voice recognition</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>Semantic HTML and CSS</li>
                                        <li>Javascript</li>
                                        <li>Node API - Voice Recognition</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>

                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/Guessing-Game-App" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://guessinggameridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Gg