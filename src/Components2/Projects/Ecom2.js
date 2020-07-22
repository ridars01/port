import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import ecom2 from './projectImgs/ecom2.jpg';
import { Button, Modal} from 'react-bootstrap';




class Ecom2 extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={ecom2} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={ecom2} />

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Ecommerce project centerd around sports equiptment</li>
                                    <li>Second iteration of the project - transform the products page into react</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>CSS grid</li>
                                        <li>React</li>
                                        <li>JSON</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>
                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/E-commerce-project" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://reactecommerceridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Ecom2