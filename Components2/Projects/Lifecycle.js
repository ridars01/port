import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import lifecycle from './projectImgs/lifecycle.jpg';

import { Button, Modal} from 'react-bootstrap';




class Lifecycle extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={lifecycle} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={lifecycle} />

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Simple counter application</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>CSS</li>
                                        <li>React specificaly life cycle hooks</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>
                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/Lifecycle-counter" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="lifecycleridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Lifecycle