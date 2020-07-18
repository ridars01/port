import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import hotelApp from './projectImgs/hotelApp.jpg';
import { Button, Modal} from 'react-bootstrap';




class Hotelapp extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={hotelApp} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={hotelApp} />
                                
                                <h4 className="viewme">About me:</h4>
                                
                                <div className= "project-description">
                                <ul>
                                    <li>Centered around a potential Hotel website</li>
                                    <li>Developed using Semantic HTML and CSS</li>
                                </ul>
                                <h4 className="viewme">View me through:</h4>
                                </div>
                                <a href="https://github.com/ridars01/Hotel-App" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://hotelapp-ridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Hotelapp