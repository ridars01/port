import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import gateway from './projectImgs/gateway.jpg';


import { Button, Modal} from 'react-bootstrap';

class Gateway extends React.Component {
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

                


                   
                        <div onClick={() => { this.handleModal() }}><img src={gateway} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img className="open-project-style" src={gateway} />

                                <h4 className="viewme">About me:</h4>

                                <div className= "project-description">
                                <ul>
                                    <li>Centered around the city of Vancouver,BC</li>
                                    <li>Developed using Semantic HTML and CSS</li>
                                </ul>
                                </div>
                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/Gateway" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://gatewayproject-ridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>
             

             






            </React.Fragment >
        )
    }
}














export default Gateway