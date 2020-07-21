import React from 'react';
import '../../Components2/About/about.css';
import './contact.css' ; 
import chatbox from './contactimgs/chatbox.jpg';
const Contact = () => {
    return (
        <div>
            <section className="grid-container-contact">

           
            <div >
            <form className= "contact-form">
                <label htmlFor="first_name" className="label-design" >First Name:</label>
                <input name="first_name" type="text" className="contact-form-text" placeholder="First Name"></input>
                <label htmlFor="last_name" className="label-design" >Last Name:</label>
                <input name="last_name" type="text" className="contact-form-text" placeholder="Last Name" />
                <label htmlFor="email" className="label-design" >E-mail:</label>
                <input name="email" type="email" className="contact-form-text" placeholder="Email" />
                <label htmlFor="message" className="label-design">Message:</label>
                <textarea name="message" className="contact-form-text" placeholder="Message" />
                <button className="contact-form-btn btn-setting">Submit</button>
            </form>
            </div>


            <div className = "grid-item-contact ">
                
                            <h3 className = "info-style-1"><span className = "info-style">E-mail:</span> ridars01@gmail.com</h3>
                           
                            <img className = "chatbox"src = {chatbox}/>
            </div>
            </section>
        </div>
    )
}
export default Contact