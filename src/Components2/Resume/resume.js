import React from 'react' ; 
import resume from './imgs/resume.jpg'; 
import {Button , Modal} from 'react-bootstrap' ;
import './resume.css'; 


class Resume extends React.Component {
    constructor(){
        super()
        this.state= {
            show:false
        }
    }
    handleModal(){
        this.setState({show:!this.state.show})
    }
    render() {
        return (
            <React.Fragment>
                
<main className = "about-box-resume about-container2">



<div>
    <div onClick = {() => {this.handleModal()}}><img src = {resume} className = "resume-img-style " /></div>
    <Modal show={this.state.show} onHide = {() =>this.handleModal()} className = "open-resume">
      <img className = "open-resume-style"src = {resume}/>
    </Modal>
</div>




<div className = "about-box-text2 resume-item" >
<h3 className = "about-header-style" id ="resume"> RESUME</h3>
<p className ="about-para-style">Hers's my Resume , where I have listed my skills , experiance , Awards / Certifications , projects , and education ! </p>
<h4 className="full-screen-style">CLICK ON RESUME TO VIEW FULL SCREEN</h4>

<i className="fa fa-arrow-left left-arrow-style"aria-hidden="true"/>
</div>

</main>
</React.Fragment>
        )
    }
}

export default Resume 