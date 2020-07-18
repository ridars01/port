import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './projects.css' ; 
import tictactoe from './projectImgs/tictactoe.jpg';
import { Button, Modal} from 'react-bootstrap';




class Tictactoe extends React.Component {
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
                
                        <div onClick={() => { this.handleModal() }}><img src={tictactoe} className="project-img-style " /></div>
                        <Modal show={this.state.show} onHide={() => this.handleModal()} >
                            <div className="open-project demoObject">
                                <img  src={tictactoe} />


                                <h4 className="viewme">About me:</h4>
                                <div className= "project-description">
                                <ul>
                                    <li>Tic tac toe game</li>
                                    <li>Developed using: 
                                        <ul className="indented-bullets">
                                        <li>CSS</li>
                                        <li>React specifically hooks</li>
                                        </ul>
                                        </li>
                                </ul>
                                </div>


                                <h4 className="viewme">View me through:</h4>
                                <a href="https://github.com/ridars01/TicTacToe2" target="_blank"><button className="button-styling">Github</button></a>
                                <a href="tictactoeridafatimah.netlify.app" target="_blank"><button className="button-styling">Webpage</button></a>
                            </div>
                        </Modal>

            </React.Fragment >
        )
    }
}














export default Tictactoe