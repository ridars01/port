import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import githubcards from './projectImgs/githubcards.jpg';
import { Button, Modal} from 'react-bootstrap';




class Githubcards extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={githubcards} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={githubcards} />
                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Centered around fetching github accounts</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>CSS</li>
                                        <li>React</li>
                                        <li>Node API (fetch github accounts)</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>

                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/react-github-cards" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://githubcardsridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Githubcards