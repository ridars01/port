import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import ecom1 from './projectImgs/ecom1.jpg';
import { Button, Modal} from 'react-bootstrap';




class Ecom1 extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={ecom1} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={ecom1} />

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Ecommerce project centerd around sports equiptment</li>
                                    <li>First iteration of the project</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>Semantic HTML and CSS</li>
                                        <li>Javascript</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>

                                <h4 className="viewme">View me through:</h4>
                                <a href="" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Ecom1