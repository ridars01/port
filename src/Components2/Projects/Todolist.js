import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import todolist from './projectImgs/todolist.jpg';
import { Button, Modal} from 'react-bootstrap';




class Todolist extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={todolist} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={todolist} />
                                <h4 className="viewme">View me through:</h4>

                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>To do list app that lists activities</li>
                                    <li>Developed using:
                                        <div className="indented-bullets">
                                            <ul>
                                                <li>CSS</li>
                                                <li>React</li>
                                            </ul>
                                        </div>

                                    </li>
                                </ul>
                                </div>

                                <a href="https://github.com/ridars01/to-do-list" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="https://todolistridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Todolist