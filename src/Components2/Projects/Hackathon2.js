import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import hackathon2 from './projectImgs/hackathon2.jpg';
import { Button, Modal} from 'react-bootstrap';




class Hackathon extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={hackathon2} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={hackathon2} />

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Medbot app with a vision to solve COVID-19 issue of symptom misunderstandings </li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>Semantic HTML and CSS</li>
                                        <li>Javascript</li>
                                        <li>Node API (voice Recognition)</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>
                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/NicolasConaway/Hope_Hackathon" target="_blank"><button className="button-styling">Github</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Hackathon