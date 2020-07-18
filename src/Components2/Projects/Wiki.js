import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import wiki from './projectImgs/wiki.jpg';
import { Button, Modal} from 'react-bootstrap';




class Wiki extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={wiki} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={wiki} />
                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Wikipedia Re-design project</li>
                                    <li>Tailored according User stories</li>
                                    <li>Implemented verification and credability evaluation features</li>
                                    <li>Creates with team collaboration </li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>CSS</li>
                                        <li>React</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>
                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/Veronica-B/wikipedia" target="_blank"><button className="button-styling">Github</button></a>
                                
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Wiki